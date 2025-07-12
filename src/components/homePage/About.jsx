import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="hero text-slate-800">
      <div className="hero-content flex-col items-stretch gap-16 lg:flex-row">
        <div className="relative flex flex-1 items-stretch">
          <div className="relative h-full w-full">
            <Image
              width={460}
              height={557}
              alt="Person image"
              src={"/assets/images/about_us/person.jpg"}
              className="h-full w-full rounded-lg object-cover pr-16 pb-20"
            />
            <Image
              width={327}
              height={332}
              alt="Part image"
              src={"/assets/images/about_us/parts.jpg"}
              className="absolute right-0 bottom-0 rounded-lg border-8 border-white"
            />
          </div>
        </div>

        <div className="h-full flex-1 space-y-5 p-4 lg:w-1/2">
          <h3 className="text-primary text-xl font-bold">About Us</h3>
          <h1 className="w-[376px] text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="text-Dark-03 pt-6 leading-7 capitalize">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <p className="text-Dark-03 pt-5 pb-6 capitalize">
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary px-6 py-4 text-lg font-semibold">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
