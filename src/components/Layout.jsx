import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="Layout">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
