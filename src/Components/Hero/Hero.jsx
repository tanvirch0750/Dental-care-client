import React from "react";
import chair from "../../assets/images/chair.png";

const Hero = () => {
  return (
    <section className="hero min-h-screen lg:bg-hero-pattern lg:bg-center lg:bg-cover">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src={chair}
          alt="dental care"
          className="max-w-md rounded-lg shadow-2xl lg:w-2/5 lg:h-[355px]"
        />
        <div className="lg:w-3/5">
          <h1 className="text-3xl lg:text-5xl font-bold">
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

export default Hero;
