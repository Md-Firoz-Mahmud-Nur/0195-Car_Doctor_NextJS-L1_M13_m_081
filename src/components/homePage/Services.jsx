import React from "react";
// import { services } from "../../lib/services";
import ServiceCard from "./ServiceCard";

const getServices = async () => {
  const res = await fetch("http://localhost:3000/services/api/getAll");
  const services = await res.json();
  return services;
};

const Services = async () => {
  const { services } = await getServices();

  if (services?.length <= 0) {
    return null;
  }

  return (
    <div className="mt-32 mb-24 text-slate-800">
      <div className="container mx-auto text-center">
        <h3 className="text-primary text-xl font-bold">Our Services</h3>
        <h2 className="text-Dark-01 mt-5 text-5xl font-bold">
          Our Service Area
        </h2>
        <p className="text-Dark-03 mt-5 leading-7 capitalize">
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
