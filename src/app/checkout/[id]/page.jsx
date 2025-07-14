"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/shared/Hero";
import { getServiceDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import * as React from "react";

const Checkout = ({ params }) => {
  const { id } = React.use(params);
  const { data } = useSession();
  const [service, setService] = useState({});

  const loadService = async () => {
    const details = await getServiceDetails(id);
    setService(details.services);
  };
  const { _id, title, description, img, price, facility } = service || {};

  const handleBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
      email: data?.user?.email,
      name: data?.user?.name,
      service: title,
      serviceId: _id,
      price: price,
      phone: event.target.phone.value,
      address: event.target.address.value,
      dueDate: event.target.dueDate.value,
      message: event.target.message.value,
    };

    const resp = await fetch("http://localhost:3000/checkout/api/newBooking", {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await resp?.json();
    console.log(response);
    event.target.reset();
  };

  useEffect(() => {
    loadService();
  }, [id]);

  return (
    <div className="container mx-auto my-12">
      <Hero title={"Check Out"} path={"Home/Checkout"}></Hero>
      <div className="bg-Dark-07 mt-32 rounded-lg p-24">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-2 gap-6">
            <input
              defaultValue={data?.user?.name}
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Name"
            ></input>
            <input
              defaultValue={price}
              className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
              placeholder="Price"
              readOnly
            ></input>
            <input
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
              name="message"
              rows={5}
              placeholder="Your Message"
              className="placeholder:text-Dark-04 col-span-2 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
            ></textarea>
            <button className="bg-primary col-span-2 rounded-lg px-6 py-4 text-xl leading-7 font-semibold text-white">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
