// components/CommonComponents/Button.jsx
import React from "react";

const Button = ({ children, variant = "green-outline", onClick }) => {
  // Define class variations
  const base =
    "px-5 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none";

  const styles = {
    "green-outline":
      "border border-green-600 text-green-600 bg-white hover:bg-green-600 hover:text-white",
    "green-filled":
      "bg-green-600 text-white border border-green-600 hover:bg-white hover:text-green-600",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
