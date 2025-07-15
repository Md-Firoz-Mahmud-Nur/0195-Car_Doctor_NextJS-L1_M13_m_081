import { connectDB } from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({
      message: "deleted the booking",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};
