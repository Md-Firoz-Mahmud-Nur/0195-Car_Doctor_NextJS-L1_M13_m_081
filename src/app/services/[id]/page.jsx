import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServiceDetails, getServices } from "@/services/getServices";

export const metadata = {
  title: "Service Details",
  description: "Service Details Page",
};

const page = async ({ params }) => {
  const details = await getServiceDetails(params.id);
  console.log(details);
  const { _id, title, description, img, price, facility } = details.services;
  const { services } = await getServices();

  return (
    <div className="container mx-auto my-12">
      <div>
        <div className="relative h-[300px] rounded-lg">
          <Image
            className="absolute top-0 left-0 h-full w-full rounded-lg object-cover"
            src={img}
            alt="service"
            width={1920}
            height={1080}
          />
          <div className="to-[rgba(21, 21, 21, 0)] from-Dark-01 absolute top-0 left-0 flex h-full items-center justify-center rounded-lg bg-gradient-to-r">
            <h1 className="ml-24 flex items-center justify-center text-5xl font-bold text-white">
              {title}
            </h1>
          </div>
          <div
            className="bg-primary absolute bottom-0 left-1/2 translate-x-[-50%] px-12 py-3 text-xl font-medium text-white"
            style={{
              clipPath: "polygon(0% 100%, 10% 0%, 90% 0%, 100% 100%)",
            }}
          >
            Home/Service Details
          </div>
        </div>

        <div className="mt-32 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex h-full flex-col gap-12">
              <div className="relative w-full flex-1">
                <Image
                  src={img}
                  fill
                  alt="service"
                  className="rounded-lg object-cover"
                ></Image>
              </div>
              <h1 className="text-Dark-01 text-4xl font-bold">{title}</h1>
            </div>
          </div>
          <div className="bg-Dark-07 rounded-lg p-10 font-semibold">
            <h2 className="text-Dark-01 text-2xl font-bold">Services</h2>

            {services.slice(0, 5).map((service) => (
              <div
                key={service._id}
                className="group hover:bg-primary mt-5 flex items-center justify-between rounded-md bg-white p-4 hover:text-white"
              >
                <div>{service.title}</div>
                <Image
                  src="/assets/RightArrowPrimaryColor.svg"
                  width={24}
                  height={24}
                  alt="Right Arrow"
                  className="group-hover:hidden"
                ></Image>
                <Image
                  src="/assets/RightArrow.svg"
                  width={24}
                  height={24}
                  alt="Right Arrow"
                  className="hidden group-hover:block"
                ></Image>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-10">
          <h2 className="text-3xl font-bold text-orange-600">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="my-6">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {facility.map((item, index) => (
              <div
                className="rounded-xl border-t-4 border-t-rose-500 bg-rose-100 p-4"
                key={index}
              >
                <h2 className="text-xl font-bold">{item?.name}</h2>
                <p>{item?.details}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-6">
            <Image
              className="h-40 w-full object-cover"
              src={"/assets/images/checkout/checkout.png"}
              alt="checkout service"
              width={400}
              height={400}
            />
            <div className="my-4 flex">
              <h2 className="text-xl font-bold">Price: </h2>
              <p className="text-2xl text-rose-500"> ${price}</p>
            </div>
            <Link href={`/checkout/${_id}`}>
              <button className="mt-2 w-full rounded-lg bg-rose-500 px-3 py-2">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
