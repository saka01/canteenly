// components/DashboardLayout.js
import React, { useState } from "react";

import SideNav from "../nav/SideNav"; // Your Side Navigation Component

const DashboardLayout = ({ children }) => {

  return (
    <div className="dashboard-container">
      <SideNav />
      <div className="dashboard-content-area">{children}</div>
    </div>
  );
};

export default DashboardLayout;

// Add corresponding CSS for `.dashboard-container` and `.content-area`
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}", // Paths to all JS/TS/JSX/TSX files in the `pages` directory
  //   "./components/**/*.{js,ts,jsx,tsx}",
  //   "./public/**/*.html",
  //   "./node_modules/flowbite-react/lib/**/*.js",
  // ],