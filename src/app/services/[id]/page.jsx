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
            src="/assets/images/checkout/checkout.png"
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
            <div className="flex flex-col gap-12">
              <div className="relative aspect-video">
                <Image
                  src={img}
                  fill
                  alt="service"
                  className="h-full rounded-lg object-cover"
                ></Image>
              </div>
              <div className="flex flex-col gap-7">
                <h1 className="text-Dark-01 text-4xl font-bold">{title}</h1>
                <p className="text-Dark-03 leading-7 capitalize">
                  {description}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {facility.map((singleFacility, index) => (
                    <div
                      key={index}
                      className="bg-Dark-07 border-primary rounded-lg border-t-2 p-10"
                    >
                      <h4 className="text-Dark-02 text-xl font-bold">
                        {singleFacility.name}
                      </h4>
                      <p className="text-Dark-03 leading-7 capitalize">
                        {singleFacility.details}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-Dark-03 leading-7 capitalize">
                  {description}
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <h1 className="text-Dark-01 text-4xl font-bold">
                  3 Simple Steps to Process
                </h1>
                <p className="text-Dark-03 leading-7 capitalize">
                  {description}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "01", title: "Step One" },
                    { number: "02", title: "Step Two" },
                    { number: "03", title: "Step Three" },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="border-Dark-06 space-y-5 rounded-lg border p-10 text-center"
                    >
                      <div className="relative flex justify-center">
                        <Image
                          src="/assets/Circle.svg"
                          width={83}
                          height={83}
                          alt="circle"
                        ></Image>
                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
                          {step.number}
                        </p>
                      </div>

                      <h3 className="text-Dark-01 text-xl font-bold uppercase">
                        {step.title}
                      </h3>
                      <p className="text-Dark-03 leading-7 capitalize">
                        It Uses A Dictionary <br />
                        Of Over 200.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/assets/images/banner/2.jpg"
                    fill
                    alt="video"
                    className="h-full rounded-lg object-cover object-top"
                  ></Image>
                  <Image
                    src="/assets/Play.svg"
                    width={128}
                    height={128}
                    alt="play"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-7">
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
            <div className="bg-Dark-01 flex flex-col gap-5 rounded-lg p-10 text-white">
              <p className="text-2xl font-bold">Download</p>
              <div className="flex gap-2.5">
                <Image
                  src="/assets/Pdf.svg"
                  width={30}
                  height={30}
                  alt="pdf"
                ></Image>
                <div className="grow">
                  <p className="text-lg font-semibold">Our Brochure</p>
                  <p className="text-Dark-04">Download</p>
                </div>
                <div className="bg-primary rounded-md p-4">
                  <Image
                    src="/assets/RightArrow.svg"
                    width={24}
                    height={24}
                    alt="Right Arrow"
                  ></Image>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Image
                  src="/assets/Pdf.svg"
                  width={30}
                  height={30}
                  alt="pdf"
                ></Image>
                <div className="grow">
                  <p className="text-lg font-semibold">Company Details</p>
                  <p className="text-Dark-04">Download</p>
                </div>
                <div className="bg-primary rounded-md p-4">
                  <Image
                    src="/assets/RightArrow.svg"
                    width={24}
                    height={24}
                    alt="Right Arrow"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="bg-Dark-01 flex flex-col gap-5 rounded-lg p-10 pb-20 text-white">
              <Image
                src="/assets/logoFooter.svg"
                alt="logo"
                width={141}
                height={114}
                className="self-center"
              />
              <p className="text-center text-xl leading-9 font-bold">
                Need Help? We Are Here <br /> To Help You
              </p>
              <div className="relative rounded-lg bg-white pt-5 pb-10 text-center">
                <h3 className="text-primary text-xl leading-9 font-semibold">
                  Car Doctor <span className="text-Dark-01">Special</span>
                </h3>
                <p className="text-Dark-03 leading-9 font-semibold">
                  Save up to <span className="text-primary">60% off</span>
                </p>
                <div className="bg-primary absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-lg px-8 py-4 text-lg font-semibold text-nowrap">
                  Get A Quote
                </div>
              </div>
            </div>
            <div className="text-4xl font-bold">Price $250.00</div>
            <div className="btn-lg btn btn-primary text-lg font-semibold">
              Proceed Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
