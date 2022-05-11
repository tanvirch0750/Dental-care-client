import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const HeroAppointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <section className="hero min-h-screen lg:bg-hero-pattern lg:bg-center lg:bg-cover">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="dental care"
          className="rounded-lg shadow-2xl lg:w-2/4 "
        />
        <div className="lg:w-2/4">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p className="text-center">You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroAppointment;
