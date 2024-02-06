import { auth } from "../../../lib/actions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "nookies";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    console.log("almost there");

    res.status(200).json({ message: "Added successfully" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
