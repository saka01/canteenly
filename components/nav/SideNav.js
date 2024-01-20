import Link from "next/link";
export default function SideNav() {
  return (
    <nav className="side-nav">
      <Link legacyBehavior href="/dashboard">
        <a>Home</a>
      </Link>
      <Link legacyBehavior href="/dashboard/profile">
        <a>Profile </a>
      </Link>
      <Link legacyBehavior href="/dashboard/settings">
        <a>Settings </a>
      </Link>
    </nav>
  );
}
