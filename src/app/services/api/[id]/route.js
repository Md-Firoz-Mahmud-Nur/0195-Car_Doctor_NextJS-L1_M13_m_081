import { connectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const services = await servicesCollection.findOne({ _id: id });
    return NextResponse.json({ services });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "No Data Found", error });
  }
};
