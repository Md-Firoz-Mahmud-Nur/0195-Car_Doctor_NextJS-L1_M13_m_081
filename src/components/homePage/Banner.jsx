import Image from "next/image";
import React from "react";

const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      previous: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      previous: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      previous: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      previous: "#slide3",
    },
  ];

  return (
    <div className="carousel my-12 w-full text-white">
      {banners.map((banner, index) => (
        <div
          style={{
            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
          }}
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full rounded-xl bg-top bg-no-repeat"
        >
          <div className="flex h-full w-full items-center">
            <div className="basis-1/2 space-y-7 p-24">
              <h1 className="text-6xl leading-20 font-bold">{banner.title}</h1>
              <p className="text-lg leading-7 capitalize">
                {banner.description}
              </p>
              <div className="text-lg font-semibold">
                <button className="btn btn-primary mr-5 p-5">
                  Discover More
                </button>
                <button className="btn btn-outline p-5 text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-12 bottom-12 flex transform justify-between">
            <a
              href={banner.previous}
              className="btn btn-circle btn-primary mr-6"
            >
              <Image
                src="/assets/LeftArrow.svg"
                alt="left Arrow"
                height={24}
                width={24}
              ></Image>
            </a>
            <a href={banner.next} className="btn btn-circle btn-primary">
              <Image
                src="/assets/RightArrow.svg"
                alt="Right Arrow"
                height={24}
                width={24}
              ></Image>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
