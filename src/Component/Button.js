import React from "react";

const Button = ({ variant = "primary", className, onClick }) => {
  return (
    <div
      className={`${baseStyle} ${variantStyle[variant]} ${className} `}
      onClick={onClick}
    >
      Próxima
    </div>
  );
};

const baseStyle =
  "max-w-[250px] rounded-md text-center font-medium px-4 py-2 uppercase cursor-pointer";
const variantStyle = {
  primary: "text-white bg-blue-400 hover:bg-blue-300",
  secondary: "text-white bg-red-400 hover:bg-red-300",
};
export default Button;
