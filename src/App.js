import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Authentication/Login/Login";
import Signup from "./Pages/Authentication/Signup/Signup";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
