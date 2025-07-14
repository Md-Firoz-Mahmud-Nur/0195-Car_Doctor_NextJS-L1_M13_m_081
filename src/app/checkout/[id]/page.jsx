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

  useEffect(() => {
    loadService();
  }, [id]);

  return (
    <div className="container mx-auto my-12">
      <Hero title={"Check Out"} path={"Home/Checkout"}></Hero>
      <div className="bg-Dark-07 mt-32 rounded-lg p-24">
        <div className="grid grid-cols-2 gap-6">
          <input
            defaultValue={data?.user?.name}
            className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
            placeholder="First Name"
          ></input>
          <input
            defaultValue={price}
            className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
            placeholder="Price"
          ></input>
          <input
            className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
            placeholder="Your Phone"
          ></input>
          <input
            defaultValue={data?.user?.email}
            className="placeholder:text-Dark-04 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
            placeholder="Your Email"
          ></input>
          <textarea
            rows={5}
            placeholder="Your Message"
            className="placeholder:text-Dark-04 col-span-2 rounded-lg bg-white px-6 py-4 placeholder:leading-7"
          ></textarea>
          <button className="bg-primary col-span-2 rounded-lg px-6 py-4 text-xl leading-7 font-semibold text-white">
            Order Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
