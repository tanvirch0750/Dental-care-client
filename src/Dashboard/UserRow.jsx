import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const UserRow = ({ user, idx, refetch }) => {
  const navigate = useNavigate();
  const makeAdmin = () => {
    fetch(
      `https://morning-shelf-05146.herokuapp.com/users/admin/${user.email}`,
      {
        method: "PUT",
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
          alert("Make admin attempt fail");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          alert("Successfully made an admin");
        }
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
