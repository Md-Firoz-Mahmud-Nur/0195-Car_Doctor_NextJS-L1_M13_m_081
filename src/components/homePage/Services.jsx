import React from "react";
import { services } from "../../lib/services";
import ServiceCard from "./ServiceCard";
const Services = async () => {
  if (services?.length <= 0) {
    return null;
  }

  return (
    <div className="mb-24 text-slate-800 mt-32">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-bold text-primary">Our Services</h3>
        <h2 className="text-5xl font-bold text-Dark-01 mt-5">Our Service Area</h2>
        <p className="mt-5 leading-7 text-Dark-03 capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {services?.length > 0 &&
          services?.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))}
      </div>
    </div>
  );
};

export default Services;
