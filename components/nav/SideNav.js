"use client";
import Link from "next/link";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideNav() {
  return (
     <nav className="side-nav">
      <Link legacyBehavior href="/dashboard">
        <button className="nav-link">Dashboard</button>
      </Link>
      <Link legacyBehavior href="/dashboard/profile">
        <button className="nav-link">Profile</button>
      </Link>
      <Link legacyBehavior href="/dashboard/menucreation">
        <button className="nav-link">Menu Creation</button>
      </Link>
      <Link legacyBehavior href="/dashboard/linkinbio">
        <button className="nav-link"> Linkinbio</button>
        </Link>
      <Link legacyBehavior href="/dashboard/customers">
        <button className="nav-link">Customers</button>
      </Link>
    </nav>
  );
}
