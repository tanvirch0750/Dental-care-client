import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const AppointmentModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user, loading] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-secondary">
            Booking for: {name}
          </h3>

          <form
            className="mt-8 grid grid-cols-1 gap-4"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              name="date"
              value={format(date, "PP")}
              disabled
              className="input w-full font-medium text-xl bg-[#E6E6E6]"
            />

            <select
              name="slot"
              className="select w-full font-medium text-xl bg-[#E6E6E6]"
            >
              {slots.map((slot, idx) => (
                <option key={`option${idx}slot`} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              value={user?.displayName || ""}
              disabled
              className="input w-full font-medium text-xl bg-[#E6E6E6]"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={user?.email || ""}
              disabled
              className="input w-full font-medium text-xl bg-[#E6E6E6]"
            />
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <input
              type="submit"
              placeholder="Sumbit"
              className="btn btn-accent input input-bordered w-full uppercase"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
