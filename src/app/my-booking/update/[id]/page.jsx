"use client";
import Hero from "@/components/shared/Hero";
import { useSession } from "next-auth/react";
import { use, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const page = ({ params }) => {
  const { id } = use(params);
  const { data } = useSession();
  const [booking, setBooking] = useState({});
  const loadBooking = async () => {
    const bookingDetails = await fetch(
      `http://localhost:3000/my-booking/api/booking/${id}`,
    );
    const data = await bookingDetails.json();
    setBooking(data?.data);
  };

  const handleUpdateBooking = async (event) => {
    event.preventDefault();
    const updatedBooking = {
      dueDate: event.target.dueDate.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    const resp = await fetch(
      `http://localhost:3000/my-booking/api/booking/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedBooking),
        headers: {
          "content-type": "application/json",
        },
      },
    );
    if (resp.status === 200) {
      toast.success("Updated Successfully");
    }
  };

  useEffect(() => {
    loadBooking();
  }, [params]);

  return (
    <div className="container mx-auto my-12">
      <Hero title={"Edit Booking"} path={"Home/Edit Booking"}></Hero>
      <div className="bg-Dark-07 mt-32 rounded-lg p-24">
        <form onSubmit={handleUpdateBooking}>
          <div className="grid grid-cols-2 gap-6">
            <input
              defaultValue={data?.user?.name}
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Name"
              readOnly
            ></input>
            <input
              defaultValue={booking?.price}
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Price"
              readOnly
            ></input>
            <input
              defaultValue={booking?.phone}
              name="phone"
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Your Phone"
              required
            ></input>
            <input
              defaultValue={data?.user?.email}
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Your Email"
              readOnly
            ></input>
            <input
              defaultValue={booking?.address}
              name="address"
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Address"
              required
            ></input>
            <input
              defaultValue={new Date().toISOString().split("T")[0]}
              type="date"
              name="dueDate"
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Due Date"
              required
            ></input>
            <textarea
              defaultValue={booking?.message}
              name="message"
              rows={5}
              placeholder="Your Message"
              className="placeholder:text-Dark-04 col-span-2 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
            ></textarea>
            <button className="bg-primary col-span-2 rounded-lg px-6 py-4 text-xl leading-7 font-semibold text-white">
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default page;
