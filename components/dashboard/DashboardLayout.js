// components/DashboardLayout.js
import React from "react";
import styles from '../../styles/dashboard.module.css';
import SideNav from "../nav/SideNav"; // Your Side Navigation Component
import TopNav from "../nav/TopNav";
import styles from "../../styles/dashboardLayout.module.css";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <TopNav />      
      <div className="flex space-x-2">
        <SideNav />
        <div className="dashboard-content-area">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
