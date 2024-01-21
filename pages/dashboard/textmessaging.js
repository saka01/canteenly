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
  //check for cookies serverside instead of client

  return {
    props: {}, // Will be passed to the page component as props
  };
}
export default function TextMessaging() {
  return (
    <DashboardLayout>
      <div>
      <h1>textmessaging work</h1>
      <button>+ New Customer</button>
      </div>
    </DashboardLayout>
  );
}
