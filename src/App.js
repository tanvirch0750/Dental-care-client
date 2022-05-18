import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddDoctor from "./Dashboard/AddDoctor";
import AllUsers from "./Dashboard/AllUsers";
import Dashboard from "./Dashboard/Dashboard";
import ManageDoctors from "./Dashboard/ManageDoctors";
import MyAppoitment from "./Dashboard/MyAppoitment";
import MyReview from "./Dashboard/MyReview";
import Payment from "./Dashboard/Payment";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Authentication/Login/Login";
import RequireAdmin from "./Pages/Authentication/RequireAdmin/RequireAdmin";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Signup from "./Pages/Authentication/Signup/Signup";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Shared/Header/Header";

function App() {
  // const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        {/* nested route start */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoitment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="payment/:appointmentId" element={<Payment />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-doctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-doctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        {/* Nested route end */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
