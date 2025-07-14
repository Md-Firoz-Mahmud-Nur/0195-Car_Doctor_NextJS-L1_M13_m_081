import React from "react";
import Hero from "@/components/shared/Hero";

const page = () => {
  return (
    <div className="container mx-auto my-12">
      <div>
        <Hero title={"Check Out"} path={"Home/Checkout"}></Hero>;
      </div>
    </div>
  );
};

export default page;
