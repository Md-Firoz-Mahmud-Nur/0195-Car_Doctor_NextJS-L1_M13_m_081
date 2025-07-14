import { connectDB } from "@/lib/ConnectDB";

export const POST = async (request) => {
  const booking = await request.json();
  const db = await connectDB();
  const bookingCollection = db.collection("booking");
  try {
    const newBooking = await bookingCollection.insertOne(booking);
    return Response.json({ message: "Booking Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
