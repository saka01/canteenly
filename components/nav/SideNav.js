"use client";
import Link from "next/link";
import NavButton from "./NavButton";
import { RxDashboard } from "react-icons/rx";
import { MdPerson } from "react-icons/md";

export default function SideNav() {
  return (
    <nav className="flex flex-col space-y-5">
      <NavButton icon={<RxDashboard />} href="/dashboard">
        Dashboard
      </NavButton>
      <NavButton icon={<MdPerson />} href="/dashboard/profile">
        Profile
      </NavButton>
      <NavButton icon={<RxDashboard />} href="/dashboard/menucreation">
        Menu Creation
      </NavButton>
      <NavButton icon={<RxDashboard />} href="/dashboard/linkinbio">
        Linkinbio
      </NavButton>
      
      <NavButton icon={<RxDashboard />} href="/dashboard/customers">
        Customers
      </NavButton>
    </nav>
  );
}
