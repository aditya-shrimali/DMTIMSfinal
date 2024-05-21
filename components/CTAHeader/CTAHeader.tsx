import { XIcon } from "@heroicons/react/outline";
import { doc, DocumentData, getDoc, onSnapshot } from "firebase/firestore";
import ls from "localstorage-slim";
import { useEffect, useState } from "react";

const CTAHeader = () => {
  const [isShown, setIsShown] = useState(true);

  const closeCTA = () => {
    ls.set("ctaHeader", "false", { ttl: 3600 });
    setIsShown(false);
  };

  return (
    <div
      className={`flex w-full transform overflow-hidden transition-all duration-300 ${
        isShown ? "max-h-96" : "max-h-0"
      }`}
    >
      <div
        style={{
          background:
            "linear-gradient(90.07deg, #4C477A -15.47%, #EE3768 43.89%, #FFA60E 120.37%)",
        }}
        className={`w-full px-4 py-2`}
      >
        <div className="mx-auto flex w-full max-w-screen-2xl items-center">
          <div className="w-full text-center text-sm font-semibold text-white">
            <p>
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                }}
              >
                India's Top 50 Non IIMs B-School Survey 2023. Click{" "}
              </span>
              <a
                href="https://theacademicinsights.com/India-s-Top-50-Non-IIMs-B-School-Survey-2023/#page=24"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  backgroundColor:
                    "rgba(255, 255, 255, 0.04); color: rgb(251, 188, 4)",
                }}
              >
                <strong>
                  <em>
                    <u>here</u>
                  </em>
                </strong>
              </a>
              <span style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}>
                {" "}
                to know more.
              </span>
            </p>
            <p>
              <span style={{ backgroundColor: "transparent" }}>
                Admissions Now Open. Contact:{" "}
              </span>
              <strong
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(76, 71, 122)",
                }}
              >
                <u>+91 86578 60718</u>
              </strong>
              <span style={{ backgroundColor: "transparent" }}> / </span>
              <strong
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(76, 71, 122)",
                }}
              >
                <u>17</u>
              </strong>
              <span style={{ backgroundColor: "transparent" }}> / </span>
              <strong
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(76, 71, 122)",
                }}
              >
                <u>16</u>
              </strong>
              <span style={{ backgroundColor: "transparent" }}> </span>
              <span style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}>
                |{" "}
              </span>
              <strong
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(76, 71, 122)",
                }}
              >
                <u>+91 22 2775 3228</u>
              </strong>
              <strong style={{ backgroundColor: "transparent" }}> / </strong>
              <strong
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(76, 71, 122)",
                }}
              >
                <u>7</u>
              </strong>
              <strong style={{ backgroundColor: "transparent" }}> / </strong>
              <strong
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(76, 71, 122)",
                }}
              >
                <u>6</u>
              </strong>
            </p>
          </div>
          <XIcon
            onClick={closeCTA}
            className="ml-2 h-6 w-6 flex-shrink-0 cursor-pointer text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CTAHeader;
