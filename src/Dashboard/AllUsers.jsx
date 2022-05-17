import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import auth from "../Firebase/firebase.init";
import UserRow from "./UserRow";

const AllUsers = () => {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://morning-shelf-05146.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="px-5">
      <h1 className="text-2xl font-bold text-accent mb-6">
        All Users: {users?.length}
      </h1>
      <div>
        <div className="overflow-x-auto mb-8">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Role</th>
                <th>Make Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <UserRow
                  key={user._id}
                  user={user}
                  idx={idx}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
