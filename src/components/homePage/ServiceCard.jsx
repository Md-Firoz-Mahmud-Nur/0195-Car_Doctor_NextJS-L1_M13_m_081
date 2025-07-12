import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service || {};
  return (
    <div className="card card-compact border-Dark-06 rounded-lg border">
      <figure className="overflow-hidden p-6">
        <Image
          src={img}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[210px] w-full rounded-lg object-cover"
        />
      </figure>

      <div className="card-body pt-0">
        <h2 className="card-title text-Dark-02 text-2xl font-bold">{title}</h2>
        <div className="card-actions items-center justify-between">
          <h6 className="text-primary text-xl font-semibold">
            Price : ${price}
          </h6>
          <Link
            className="btn btn-circle btn-outline hover:bg-primary/15 hover:border-primary border-0 hover:border"
            href={`/services/${_id}`}
          >
            <Image
              src="/assets/RightArrowPrimaryColor.svg"
              width={24}
              height={24}
              alt="Right Arrow"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
