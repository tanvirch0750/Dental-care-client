import React from "react";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";

const infoDb = [
  {
    _id: "1",
    title: "Opening Hours",
    text: "Every Moday, Tuesday, Wedneday, Thusday 9:00 AM",
    image: clock,
    background: "gradient",
  },
  {
    _id: "2",
    title: "Visit our location",
    text: "Brooklyn, NY 10036, United States",
    image: location,
    background: "accent",
  },
  {
    _id: "3",
    title: "Contact us now",
    text: "+0123456789",
    image: phone,
    background: "gradient",
  },
];

const Info = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
      {infoDb.map((info) => (
        <InfoCard key={info._id} info={info} />
      ))}
    </section>
  );
};

export default Info;
