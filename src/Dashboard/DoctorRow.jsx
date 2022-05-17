import React from "react";

const DoctorRow = ({ doctor, idx, refetch, setDeleteModal }) => {
  const { _id, name, speciality, email, image } = doctor;

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
        <label
          onClick={() => setDeleteModal(doctor)}
          for="delete-modal"
          className="btn btn-xs btn-error text-white"
        >
          Deletee
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
