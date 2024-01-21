import Link from "next/link";

export default function SideNav() {

  return (
    <nav className="side-nav">
      <Link legacyBehavior href="/dashboard">
        <button className="nav-link">Dashboard</button>
      </Link>
      <Link legacyBehavior href="/dashboard/profile">
        <button className="nav-link">Profile</button>
      </Link>
      <Link legacyBehavior href="/dashboard/textmessaging">
        <button className="nav-link">TextMessageMarketing</button>
      </Link>
    </nav>
  );
}
