import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const testimonialDb = [
  {
    _id: "1",
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image: people1,
    name: "Harry Brandon",
    location: "California",
  },
  {
    _id: "2",
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image: people2,
    name: "Erling Julia",
    location: "Manchester",
  },
  {
    _id: "3",
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image: people3,
    name: "Maliha Afrin",
    location: "New York",
  },
];

const TestimonialHome = () => {
  return (
    <section className="pb-24 px-5">
      <div className="flex justify-between">
        <div>
          <span className="uppercase font-bold text-secondary text-[20px]">
            Testimonial
          </span>
          <h2 className="text-[24px] lg:text-[36px] text-accent capitalize">
            What our patients says
          </h2>
        </div>
        <div>
          <img src={quote} alt="quote" className="w-[192px] h-[156px]" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 lg:container lg:mx-auto">
        {testimonialDb.map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialHome;
