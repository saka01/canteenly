import Link from "next/link";
import styles from '../../styles/sideNav.module.css';

export default function SideNav() {``
  return (
    <nav className={styles["side-nav"]}>
      <Link legacyBehavior href="/dashboard">
        <button className={styles["nav-link"]}>Dashboard</button>
      </Link><br/>
      <Link legacyBehavior href="/dashboard/profile">
        <button className={styles["nav-link"]}>Profile</button>
      </Link><br/>
      <Link legacyBehavior href="/dashboard/textmessaging">
        <button className={styles["nav-link"]}>Linkin Bio</button>
      </Link><br/>
      <Link legacyBehavior href="/dashboard/menucreation">
        <button className={styles["nav-link"]}>Menu Creation</button>
      </Link><br/>
      <Link legacyBehavior href="/dashboard/textmessaging">
        <button className={styles["nav-link"]}>TextMessageMarketing</button>
      </Link><br/>
    </nav>
  );
}
