import React from "react";

const DoctorRow = ({ doctor, idx, refetch }) => {
  const { _id, name, speciality, email, image } = doctor;

  const handleDelete = (email) => {
    fetch(`https://morning-shelf-05146.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("doctor delete", data);
        if (data.deletedCount) {
          refetch();
          alert(`Doctor ${name} deleted successfully`);
        } else {
          alert("Something went wrong");
        }
      });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>{email}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-xs btn-error text-white"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
