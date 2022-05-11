import React from "react";

const Button = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase"
    >
      {children}
    </button>
  );
};

export default Button;
