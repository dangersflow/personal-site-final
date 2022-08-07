import "../styles/globals.css";
import react, { useEffect, useState, useLayoutEffect } from "react";
import Col from "../components/Col";
import IntroSequence from "../components/IntroSequence";
import SideBar from "../components/SideBarContent/SideBar";
import { useShowIntro } from "../components/Store";
import useSessionStorage from "../components/UseSessionStorage";
import useSetSessionStorage from "../components/SetSessionStorage";

function MyApp({ Component, pageProps }) {
  const [temp, setTemp] = useState(true);

  const showIntro = useSessionStorage("showIntro");

  useEffect(() => {
    if (showIntro === "true") {
      console.log("setting sessionStorage");
      sessionStorage.setItem("showIntro", temp.toString());
    }
  }, [temp]);

  const handleChange = (state) => {
    setTemp(state);
  };

  console.log("bruh: ", showIntro);

  return (
    <>
      {showIntro === "true" && temp ? (
        <Col
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
          }}
        >
          <IntroSequence setShow={handleChange} />
        </Col>
      ) : (
        <>
          <SideBar />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
