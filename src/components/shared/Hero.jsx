import Image from "next/image";
import React from "react";

const Hero = ({ title, path }) => {
  return (
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
        {path}
      </div>
    </div>
  );
};

export default Hero;
