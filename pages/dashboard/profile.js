import DashboardLayout from "../../components/dashboard/DashboardLayout";
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
  //pull user profile data to edit or change
  //add other setting

  return {
    props: {}, // Will be passed to the page component as props
  };
}
export default function Profile() {
  return (
    <DashboardLayout>
      <h1>User Profile</h1>
    </DashboardLayout>
  );
}
