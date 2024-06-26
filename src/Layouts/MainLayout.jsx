import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

export default function MainLayout() {
  const url = window.location.pathname.includes("promotion");

  return (
    <>
      {url || <Header />}
      <Outlet />
      {url || <Footer />}
    </>
  );
}
