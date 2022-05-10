import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { text, image, name, location } = testimonial;
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <p>{text}</p>
        <div className="avatar flex items-center gap-6 mt-8">
          <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="avatar" />
          </div>

          <p className="flex flex-col">
            <span className="text-accent text-xl font-medium">{name}</span>
            <span>{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
