import React, { useState } from "react";
import AvailableAppointment from "../../Components/AvailableAppointment/AvailableAppointment";
import HeroAppointment from "../../Components/Hero/HeroAppointment";
import Footer from "../../Shared/Footer/Footer";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <HeroAppointment date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </>
  );
};

export default Appointment;
