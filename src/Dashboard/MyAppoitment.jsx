import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";

const MyAppoitment = () => {
  const [booking, setBookings] = useState([]);
  const [user, loading] = useAuthState(auth);
  console.log(`http://localhost:5000/booking?patient=${user.email}`);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          console.log("datt", data);
        });
    }
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <section className="px-5">
      <h1 className="text-2xl font-bold text-accent mb-6">My appointments</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>{book.patientName}</td>
                  <td>{book.date}</td>
                  <td>{book.slot}</td>
                  <td>{book.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyAppoitment;
