import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/NoScrollBar.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import { analytics } from "../firebase";
import { setCurrentScreen, logEvent } from "firebase/analytics";
import Preloader from "../components/Preloader/Preloader";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import FloatingWhatsApp from "react-floating-whatsapp";
import CTAHeader from "../components/CTAHeader/CTAHeader";
import Header from "../components/Header/Header";
import Script from "next/script";
import UserContextProvider from "../store/UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
config.autoAddCss = false;

const progress = new ProgressBar({
  size: 4,
  color: "#4C477A",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logAnalyticsEvent = (url: string) => {
        setCurrentScreen(analytics, url);
        logEvent(analytics, "page_view", { screen_name: url });
      };

      routers.events.on("routeChangeComplete", logEvent);
      //For First Page
      logAnalyticsEvent(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off("routeChangeComplete", logEvent);
      };
    }
  }, []);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1184717338955771"); // facebookPixelId
        ReactPixel.pageView();

        routers.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [routers.events]);

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return (
        <>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="keywords" content="" />
            <meta name="author" content="Aditya Acharya | Bourgeois" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />

            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* TODO: Clarity script */}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "c50qyz669w");`,
            }}
          />
          {/* <CTAHeader />
          <Header />
          <Preloader />
          <Component {...pageProps} />
          <Sidebar /> */}
          <UserContextProvider>
          <ToastContainer
           />
          <CTAHeader />
          <Header />
          <Preloader />
          <Component {...pageProps} />
          <Sidebar />
          </UserContextProvider>
          <FloatingWhatsApp
            className="z-50"
            avatar="/favicon.ico"
            phoneNumber="+918657860718"
            accountName="DMTIMS"
            chatMessage={`Greetings from DMTIMS!\n\nGot queries? \nHow may we help you?`}
            allowClickAway
            notification
            notificationDelay={60000} // 1 minute
          />
          <Footer />
        </>
      );
    };

  return renderWithLayout(<Component {...pageProps} />);
}

export default MyApp;
