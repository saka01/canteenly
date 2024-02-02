import React from "react";
import Link from "next/link";
import NavButton from './NavButton';
import styles from '../../styles/dashboard.module.css';

export default function TopNav() {
  return (
    <nav className={`flex flex-row space-y-7 width:100% ${styles.topNav}`}>
      <h1 className={`border-solid border-2 ${styles.topNavTitle}`}>
        This will be a top nav bar
      </h1>
    </nav>
  );
}
