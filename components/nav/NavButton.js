"use client";
import Link from "next/link";

export default function NavButton({icon, href, children}) {
  return (
    <Link legacyBehavior href={`${href}`}>
      <button className="nav-link">
        {icon}
        {children}
      </button>
    </Link>
  );
}
