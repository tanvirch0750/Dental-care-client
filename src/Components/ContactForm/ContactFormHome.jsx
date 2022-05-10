import React from "react";
import background from "../../assets/images/appointment.png";

const ContactFormHome = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="mt-12 mb-12 py-16"
    >
      <div className="text-center pb-10">
        <span className="uppercase font-bold text-secondary text-[20px]">
          Contact Us
        </span>
        <h2 className="text-[24px] lg:text-[36px] text-white capitalize">
          Stay Connected With Us
        </h2>
      </div>
      <form className="max-w-md mx-auto text-center">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full mb-5"
        />
        <input
          type="text"
          placeholder="subject"
          className="input w-full mb-5"
        />
        <textarea
          className="textarea w-full mb-5"
          placeholder="Your Message"
        ></textarea>
        <input
          type="submit"
          value="submit"
          className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase"
        />
      </form>
    </section>
  );
};

export default ContactFormHome;
