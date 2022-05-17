import React from "react";
import { useQuery } from "react-query";
import Loader from "../Components/Loader/Loader";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
    fetch("https://morning-shelf-05146.herokuapp.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  console.log(doctors);

  return (
    <section className="px-5">
      <h1 className="text-2xl font-bold text-accent mb-6">Manage Doctors</h1>
    </section>
  );
};

export default ManageDoctors;
