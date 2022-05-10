import React from "react";

const ServiceCard = ({ service }) => {
  const { title, image, text } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-accent">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
