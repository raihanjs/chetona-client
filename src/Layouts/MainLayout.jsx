import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
