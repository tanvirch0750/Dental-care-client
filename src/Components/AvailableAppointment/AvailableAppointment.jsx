import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");

  const {
    isLoading,
    error,
    data: appointment,
    refetch,
  } = useQuery(["availableAppointment", formatedDate], () =>
    fetch(
      `https://morning-shelf-05146.herokuapp.com/available?date=${formatedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="py-24 lg:container lg:mx-auto px-5 lg:px-0">
      <p className="text-center text-secondary font-bold text-2xl">
        Available Appointments on {format(date || new Date(), "PP")}
      </p>
      <div className="pt-8 lg:pt-[70px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appointment?.map((item) => (
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
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
