import React from "react";
import Button from "../../Components/Button/Button";

const AppointmentCard = ({ item }) => {
  const { name, slots } = item;
  return (
    <div className="card bg-white shadow-lg">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary mb-2">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500 text-sm">Try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "slots" : "slot"} availbale
        </p>
        <div className="card-actions justify-end mt-3">
          <Button disabled={slots.length === 0}>Book Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
