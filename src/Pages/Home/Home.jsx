import React from "react";
import AppointmentHome from "../../Components/AppointmentHome/AppointmentHome";
import FeatureHome from "../../Components/FeatureHome/FeatureHome";
import Hero from "../../Components/Hero/Hero";
import Info from "../../Components/Info/Info";
import Services from "../../Components/Service/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <FeatureHome />
      <AppointmentHome />
    </>
  );
};

export default Home;
