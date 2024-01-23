import { auth } from "../../../lib/actions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "nookies";
const { PrismaClient } = require("@prisma/client");

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    console.log("almost there");
    const newUser = await prisma.user.create({
      data: {
        firebaseId: "some-firebase-id",
        email: "user@example.com",
        name: "User Name",
      },
    });
    console.log(newUser);
    res.status(200).json({ message: "Added successfully" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
