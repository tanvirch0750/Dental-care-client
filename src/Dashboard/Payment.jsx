import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JqdAsGXrwkMLuhtiJgMQKnaLLHsfi7RQMEznBz9DWD4EQxzjKqGqjajqHa3EMBXLxTM0Bf6WiGAAigES9a0YSB600FrqYDOoX"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const url = `http://morning-shelf-05146.herokuapp.com/booking/${appointmentId}`;

  const { data: appointment, isLoading } = useQuery(
    ["booking", appointmentId],
    () =>
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold text-accent mb-6 ml-8">
        Make your Payment
      </h1>
      <div className="flex justify-center items-center px-5">
        <div>
          <div class="card w-100 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-secondary font-bold">{`Hello ${appointment.patientName}`}</h2>
              <p>
                We will see you on{" "}
                <span className="text-primary font-bold">
                  {appointment.date}
                </span>{" "}
                at{" "}
                <span className="text-primary font-bold">
                  {appointment.slot}
                </span>
              </p>
              <p className="font-bold">Please Pay: ${appointment.price}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card w-100 bg-base-100 shadow-xl mt-8">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
