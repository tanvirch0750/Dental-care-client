import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../Components/Loader/Loader";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Sepeciality</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, idx) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                idx={idx}
                refetch={refetch}
                setDeleteModal={setDeleteModal}
              />
            ))}
          </tbody>
        </table>
        {deleteModal && (
          <DeleteConfirmationModal
            deleteModal={deleteModal}
            refetch={refetch}
            setDeleteModal={setDeleteModal}
          />
        )}
      </div>
    </section>
  );
};

export default ManageDoctors;
