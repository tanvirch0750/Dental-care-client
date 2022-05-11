import React from "react";

const AppointmentModal = ({ treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2 bg-accent"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label for="appointment-modal" className="btn bg-accent">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
