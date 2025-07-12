import { connectDB } from "@/lib/ConnectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  console.log(newUser);
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const existingUser = await userCollection.findOne({ email: newUser.email });
    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 304 });
    }

    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    console.log(hashedPassword);
    const response = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return Response.json(
      { message: "User created successfully" },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { message: "Error creating user", error },
      { status: 500 },
    );
  }
};
