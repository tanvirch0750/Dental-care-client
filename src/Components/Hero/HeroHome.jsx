import React from "react";
import chair from "../../assets/images/chair.png";

const HeroHome = () => {
  return (
    <section className="hero min-h-[calc(100vh-80px)] pb-12 lg:bg-hero-pattern lg:bg-center lg:bg-cover">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="lg:w-2/4 ">
          <img
            src={chair}
            alt="dental care"
            className="rounded-lg shadow-2xl lg:h-[355px]"
          />
        </div>
        <div className="lg:w-2/4">
          <h1 className="text-3xl lg:text-5xl text-accent font-bold">
            Your <span className="text-primary">New Smile</span> Starts{" "}
            <br></br> Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
