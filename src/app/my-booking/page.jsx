"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const Page = () => {
  const session = useSession();
  const [bookings, setBooking] = useState([]);
  const loadData = async () => {
    const resp = await fetch(
      `http://localhost:3000/my-booking/api/${session?.data?.user?.email}`,
    );
    const data = await resp.json();
    setBooking(data?.myBookings);
  };

  const handleDelete = async (id) => {
    const deleted = await fetch(
      `http://localhost:3000/my-booking/api/booking/${id}`,
      {
        method: "DELETE",
      },
    );
    console.log(deleted);
    const resp = await deleted.json();

    if (resp?.response?.deletedCount > 0) {
      loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, [session]);

  return (
    <div className="container mx-auto my-12">
      <div className="relative mb-32 h-[300px] rounded-lg">
        <Image
          className="absolute top-0 left-0 h-full w-full rounded-lg object-cover brightness-50"
          src="/assets/CarPolishing.jpg"
          alt="service"
          width={1920}
          height={1080}
        />
        <div className="to-[rgba(21, 21, 21, 0)] from-Dark-01 absolute top-0 left-0 flex h-full items-center justify-center rounded-lg bg-gradient-to-r">
          <h1 className="ml-24 flex items-center justify-center text-5xl font-bold text-white">
            Cart Details
          </h1>
        </div>
        <div
          className="bg-primary absolute bottom-0 left-1/2 translate-x-[-50%] px-12 py-3 text-xl font-medium text-white"
          style={{
            clipPath: "polygon(0% 100%, 10% 0%, 90% 0%, 100% 100%)",
          }}
        >
          Home/Product Details
        </div>
      </div>
      <div className="flex flex-col gap-7">
        {bookings.map((booking) => (
          <div key={booking._id} className="flex items-center justify-between">
            <div className="flex flex-1/2 items-center gap-7">
              <MdCancel
                onClick={() => handleDelete(booking._id)}
                className="hover:text-primary size-10"
              ></MdCancel>
              <Image
                src={booking?.img}
                height={150}
                width={150}
                alt="Car"
                className="rounded-lg object-cover"
              ></Image>
              <div className="text-Dark-02 text-xl leading-7 font-semibold">
                {booking?.service}
              </div>
            </div>
            <div className="text-Dark-02 flex flex-1/2 justify-between gap-7 text-xl leading-7 font-semibold">
              <p>${booking?.price}</p>
              <p>{booking?.dueDate}</p>
              <button className="btn btn-primary">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
