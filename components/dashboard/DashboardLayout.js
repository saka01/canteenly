// components/DashboardLayout.js
import React from "react";
import styles from '../../styles/dashboard.module.css';
import SideNav from "../nav/SideNav"; // Your Side Navigation Component

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboardContainer}>
      <SideNav />
      <div className={styles['dashboard-content-area']}>
        <div className={styles['center-content-vertically']}>
          <div >
            <div className={styles['middle-line']}></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
