import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Custom404() {
  return (
    <div className="cursor-default">
      <Head>
        <title>Error 404</title>
      </Head>

      <main className="mx-auto flex flex-col items-center py-10 lg:my-10 xl:max-w-6xl 2xl:max-w-screen-2xl">
        <h1 className="dmtims-title text-center">404</h1>
        <h2 className="dmtims-subtitle">Page not found</h2>
        <img
          className="h-60 w-full max-w-3xl object-cover sm:h-96"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404-Not-Found"
        />
        <h3 className="text-perkypurple text-lg font-medium md:text-xl">
          Looks like you're lost
        </h3>

        <p className="pb-6 text-[#968C9D] sm:text-lg lg:text-xl">
          The page you are looking for not avaible!
        </p>

        <Link
          href={"/"}
          className="my-2 transform rounded-full bg-[#EE3768] px-6 py-3 font-semibold text-white transition duration-300 active:scale-95"
        >
          Go to Home
        </Link>
      </main>
    </div>
  );
}

export default Custom404;
