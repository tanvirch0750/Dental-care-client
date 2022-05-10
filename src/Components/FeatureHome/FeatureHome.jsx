import React from "react";
import treatment from "../../assets/images/treatment.png";
import Button from "../Button/Button";

const FeatureHome = () => {
  return (
    <section className="hero min-h-screen pt-10">
      <div className="hero-content flex-col lg:flex-row gap-14">
        <img
          src={treatment}
          alt="treatment"
          className="rounded-lg shadow-2xl h-[576px]"
        />
        <div className="lg:w-2/5">
          <h2 className="text-5xl font-bold text-accent">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureHome;
