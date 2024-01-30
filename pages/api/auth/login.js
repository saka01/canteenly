
import { auth } from "../../lib/actions";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setCookie } from 'nookies';

export default async function login(req, res) {
  const { email, password } = req.body;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setCookie({ res }, 'currentUser', email, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
