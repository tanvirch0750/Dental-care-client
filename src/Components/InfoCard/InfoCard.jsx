import React from "react";

const InfoCard = ({ info }) => {
  const { title, text, image } = info;
  return (
    <div
      className={`card text-center lg:text-left lg:card-side p-4 text-white ${
        info.background === "gradient"
          ? "bg-gradient-to-r from-secondary to-primary"
          : "bg-accent"
      }`}
    >
      <figure>
        <img
          className={`${
            info.background === "accent" ? "w-[70px]" : "w-[86px]"
          }`}
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center lg:justify-start">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
