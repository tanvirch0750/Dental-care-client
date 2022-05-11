import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const HeroAppointment = ({ date, setDate }) => {
  return (
    <section className="hero min-h-[calc(100vh-80px)] lg:bg-hero-pattern lg:bg-center lg:bg-cover">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <div className="lg:w-3/4 ">
          <img
            src={chair}
            alt="dental care"
            className="rounded-lg shadow-2xl lg:h-[355px]"
          />
        </div>
        <div className="lg:w-2/4">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          {/* <p className="text-center">You have selected: {format(date, "PP")}</p> */}
        </div>
      </div>
    </section>
  );
};

export default HeroAppointment;
