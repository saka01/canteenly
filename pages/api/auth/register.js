import { auth } from "../../lib/actions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "nookies";

export default async function register(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }
  try {
    const { email, password } = req.body;
    await createUserWithEmailAndPassword(auth, email, password);

    setCookie({ res }, "currentUser", email, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });

    res.status(200).json({ message: "Sign Up successfully" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
