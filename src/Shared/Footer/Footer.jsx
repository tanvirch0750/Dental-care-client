import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="mt-12 mb-12 "
    >
      <div className="footer p-10">
        <div className="lg:justify-self-center">
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Chekup
          </Link>
        </div>
        <div className="lg:justify-self-center">
          <span className="footer-title">Oral Health</span>
          <Link to="/" className="link link-hover">
            Florite Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teeth Whittening
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div className="lg:justify-self-center">
          <span className="footer-title">Our Address</span>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <p className="text-center text-sm mt-8">
        Copyright 2022 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
