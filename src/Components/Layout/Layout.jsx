import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // Check if the pathname is '/home' or an empty string
  const showNavbarAndSidebar =
    location.pathname === "/home" || location.pathname === "/";

  return (
    <>
      {/* Conditional rendering of Navbar based on showNavbarAndSidebar */}
      {showNavbarAndSidebar ? null : <Navbar />}

      {/* Always render Outlet */}
      <Outlet />
    </>
  );
}
