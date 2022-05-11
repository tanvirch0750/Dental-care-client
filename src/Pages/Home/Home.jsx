import React from "react";
import AppointmentHome from "../../Components/AppointmentHome/AppointmentHome";
import ContactFormHome from "../../Components/ContactForm/ContactFormHome";
import FeatureHome from "../../Components/FeatureHome/FeatureHome";
import HeroHome from "../../Components/Hero/HeroHome";
import Info from "../../Components/Info/Info";
import Services from "../../Components/Service/Services";
import TestimonialHome from "../../Components/Testimonial/TestimonialHome.";

const Home = () => {
  return (
    <>
      <HeroHome />
      <Info />
      <Services />
      <FeatureHome />
      <AppointmentHome />
      <TestimonialHome />
      <ContactFormHome />
    </>
  );
};

export default Home;
