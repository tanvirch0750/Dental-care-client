import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { appointmentId } = useParams();
  return (
    <div>
      <h1>{appointmentId}</h1>
    </div>
  );
};

export default Payment;
