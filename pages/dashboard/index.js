import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { FaSignOutAlt } from 'react-icons/fa';
import styles from '../../styles/sideNav.module.css'; // Import the styles module

export async function getServerSideProps(context) {
  const userCookie = context.req.cookies["currentUser"];
  if (!userCookie) {
    console.log("NO USER");
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home({ user }) { // Renamed to 'Home' as per Next.js convention
  async function handleLogout(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }
      window.location.href = "/signin";
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <DashboardLayout>
      <h1>Hello, Dashboard Page! Print user details here</h1>
    

      <button className={styles.sides} onClick={handleLogout} type="button">
        <FaSignOutAlt /> Log Out
      </button>
    </DashboardLayout>
  );
}
