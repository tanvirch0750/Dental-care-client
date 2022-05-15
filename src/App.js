import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import MyAppoitment from "./Dashboard/MyAppoitment";
import MyReview from "./Dashboard/MyReview";
import auth from "./Firebase/firebase.init";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Authentication/Login/Login";
import ProtectedAuth from "./Pages/Authentication/RequireAuth/ProtectedAuth";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Signup from "./Pages/Authentication/Signup/Signup";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Shared/Header/Header";

function App() {
  const [user, loading, error] = useAuthState(auth);
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
        </Route>
        <Route
          path="/login"
          element={
            <ProtectedAuth>
              <Login />
            </ProtectedAuth>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
