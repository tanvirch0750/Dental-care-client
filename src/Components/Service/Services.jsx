import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import teeth from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const serviceDb = [
  {
    _id: "1",
    title: "Fluoride Treatment",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    image: fluoride,
  },
  {
    _id: "2",
    title: "Cavity Filling",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    image: cavity,
  },
  {
    _id: "3",
    title: "Teeth Whitening",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    image: teeth,
  },
];

const Services = () => {
  return (
    <section className="py-24 lg:container lg:mx-auto px-5 lg:px-0">
      <div className="text-center">
        <span className="uppercase font-bold text-secondary text-[20px]">
          Our Services
        </span>
        <h2 className="text-[24px] lg:text-[36px] text-accent capitalize">
          Services We Provide
        </h2>
      </div>
      <div className="pt-8 lg:pt-[70px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceDb.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
