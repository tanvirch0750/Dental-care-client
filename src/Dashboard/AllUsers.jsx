import React from "react";
import { useQuery } from "react-query";
import Loader from "../Components/Loader/Loader";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
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
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.email}</td>
                  <td>User</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
