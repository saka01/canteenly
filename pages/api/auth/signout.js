// pages/api/logout.js
import { destroyCookie } from "nookies";
import { auth } from "../../../lib/actions";
import { signOut as firebaseSignOut } from "firebase/auth";
export default async function signout(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  await firebaseSignOut(auth);
  // Destroy the cookie
  destroyCookie({ res }, "currentUser", { path: "/" });
  //redirect to home
  return res.status(200).json({ message: "Logged out successfully" });
}
