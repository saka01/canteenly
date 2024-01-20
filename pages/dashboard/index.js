
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
  //pull home dashboard data, 
  //user profile, 
  //total number of orders in past 30 days for widget


  return {
    props: {}, // Will be passed to the page component as props
  };
}

export default function home({ user }) {

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


    // Handle successful logout (e.g., redirect to login page)
  } catch (error) {
    console.error(error.message);
    // Handle logout error
  }
}
  

  return (
    <>
      <h1>Hello, Dashboard Page! Name</h1>
      <button onClick={handleLogout} type="submit">
        LogOut
      </button>
    </>
  );
}

