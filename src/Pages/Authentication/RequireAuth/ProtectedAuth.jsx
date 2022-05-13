import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/firebase.init";

const ProtectedAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  //   const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  //   if (!user) {
  //     navigate("/login");
  //   }

  return children;
};

export default ProtectedAuth;
