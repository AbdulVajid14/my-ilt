import React from "react";

const Button = ({ children, variant = "green-outline", onClick }) => {
  const base =
    "px-5 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none";

  const styles = {
    "green-outline":
      "border border-emerald-800 text-emerald-800 bg-white hover:bg-emerald-800 hover:text-white",
    "green-filled":
      "bg-emerald-800 text-white/90 border border-emerald-800 hover:bg-white hover:text-emerald-800",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
