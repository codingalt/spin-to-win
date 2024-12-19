import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../styles/global.scss";
import { ThemeProvider } from "@/context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="react-user-ui-theme">
        <wc-toast theme="light"></wc-toast>
        <div className="App w-full h-full">
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Root;
