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
      <Link legacyBehavior href="/dashboard/menucreation">
        <button className="nav-link">Menu Creation</button>
      </Link>
      <Link legacyBehavior href="/dashboard/textmessaging">
        <button className="nav-link">TextMessage Marketing</button>
      </Link>
      <Link legacyBehavior href="/dashboard/linkinbio">
        <button className=",nav-link"> Linkinbio</button>
      </Link>
    </nav>
  );
}
