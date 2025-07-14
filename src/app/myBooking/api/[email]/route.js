import { connectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { email } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const myBookings = await bookingsCollection
      .find({ email: email })
      .toArray();
    return NextResponse.json({ myBookings });
  } catch (error) {
    return NextResponse.json({ message: "No Data Found" });
  }
};
