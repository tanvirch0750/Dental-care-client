import React from "react";

const UserRow = ({ user, idx, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        alert("Successfully made an admin");
      });
  };
  return (
    <tr key={user._id}>
      <th>{idx + 1}</th>
      <td>{user.email}</td>
      <td>{user?.role === "admin" ? "Admin" : "User"}</td>
      <td>
        {user?.role === "admin" ? (
          <span>Already Admin</span>
        ) : (
          <button className="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs bg-red-500 border-red-500">
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
