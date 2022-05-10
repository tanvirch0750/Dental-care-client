import React from "react";
import background from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor-small.png";
import Button from "../Button/Button";

const AppointmentHome = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="mt-12 mb-12 lg:mt-[300px] lg:mb-[170px] py-0"
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row  py-0">
          <img
            src={doctor}
            alt="treatment"
            className="rounded-lg  h-[636px] mt-[-200px] hidden lg:block"
          />
          <div className="lg:w-3/5">
            <span className="text-secondary font-bold">Appointment</span>
            <h2 className="text-4xl font-bold text-white pt-7">
              Make an appointment Today
            </h2>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHome;
