import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const MyAppoitment = () => {
  const [booking, setBookings] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://morning-shelf-05146.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("accessToken");
            signOut(auth);
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setBookings(data);
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
                <th>Paymnet</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book, idx) => (
                <tr key={book._id}>
                  <th>{idx + 1}</th>
                  <td>{book.patientName}</td>
                  <td>{book.date}</td>
                  <td>{book.slot}</td>
                  <td>{book.treatment}</td>
                  <td>
                    {book.price && !book.paid ? (
                      <Link
                        className="btn btn-sm btn-success text-white"
                        to={`/dashboard/payment/${book._id}`}
                      >
                        Pay
                      </Link>
                    ) : (
                      "Paid"
                    )}
                  </td>
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
