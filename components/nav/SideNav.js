import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { MdPerson } from "react-icons/md";
import styles from '../../styles/sideNav.module.css';

const NavButton = ({ href, icon, children }) => {
  return (
    <Link href={href}>
      <button className={styles["nav-link"]}>
        {icon} {children}
      </button>
    </Link>
  );
};

export default function SideNav() {
  return (
    <nav className={styles["side-nav"]}>
      <NavButton href="/dashboard" icon={<RxDashboard />}>
        Dashboard
      </NavButton>
      <br />
      <NavButton  icon={<MdPerson />} href="/dashboard/profile">
        Profile
      </NavButton>
      <br />
      <NavButton icon={<RxDashboard />} href="/dashboard/menucreation" >
        Menu Creation
      </NavButton>
      <br />
      <NavButton icon={<RxDashboard />} href="/dashboard/linkinbio" >
        Linkin Bio
      </NavButton>
      <br />
      <NavButton icon={<RxDashboard />} href="/dashboard/textmessaging" >
        Customers
      </NavButton><br/>
      <NavButton icon={<RxDashboard />} href="/dashboard/textmessaging" >
        Share My Website
      </NavButton>

     
    </nav>
  );
}
