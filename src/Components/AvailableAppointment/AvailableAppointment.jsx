import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const AvailableAppointment = ({ date }) => {
  const [appointment, setAppointment] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentScedule.json")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [date]);

  return (
    <section className="py-24 lg:container lg:mx-auto px-5 lg:px-0">
      <p className="text-center text-secondary font-bold text-2xl">
        Available Appointments on {format(date, "PP")}
      </p>
      <div className="pt-8 lg:pt-[70px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appointment.map((item) => (
          <AppointmentCard
            key={item._id}
            item={item}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
