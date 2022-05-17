import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-100 pt-4 pb-8">
          <h1 className="text-4xl text-secondary font-bold mb-8 ml-8">
            Welcome to Dental Care dashboard
          </h1>
          {/* main content */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* sidebar contet */}
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Reviews</Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/add-doctor">Add a doctor</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/manage-doctor">Manage doctors</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
