import DashboardLayout from "../../components/dashboard/DashboardLayout";
import TestMdal from "../../components/dashboard/TestMdal";
import { Alert } from "flowbite-react";

export async function getServerSideProps(context) {
  //react will look to see if theres a user
  const userCookie = context.req.cookies["currentUser"];
  if (!userCookie) {
    console.log("nO USER");
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  //check for cookies serverside instead of client

  return {
    props: {}, // Will be passed to the page component as props
  };
}
export default function TextMessaging() {

  const handleNewCustomer = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/customers/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }
        // window.location.href = "/dashboard";

        // Handle successful login (e.g., redirect to dashboard)
      } catch (error) {
        console.error(error.message);
        // Handle login error
      }
  }
  return (
    <DashboardLayout>
      <div>
        <h1>TO DO:</h1>
        <h3>List all user customers</h3>
        <h3>Allow grouping of customers</h3>
        <h3>Allow selecting all customers by group or all</h3>
        <h3>Allow mass messaging</h3>
        <button onClick={handleNewCustomer}>Add New Customer</button>
        <TestMdal />
      </div>
    </DashboardLayout>
  );
}