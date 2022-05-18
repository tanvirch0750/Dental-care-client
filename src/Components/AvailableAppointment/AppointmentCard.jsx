import React from "react";

const AppointmentCard = ({ item, setTreatment }) => {
  const { name, slots, price } = item;
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
        <p>Price: ${price}</p>
        <div className="card-actions justify-end mt-3">
          <label
            htmlFor="appointment-modal"
            className="btn modal-button btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase"
            disabled={slots.length === 0}
            onClick={() => setTreatment(item)}
          >
            Book Treatment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
