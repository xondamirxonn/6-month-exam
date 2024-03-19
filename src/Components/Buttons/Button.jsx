import clsx from "clsx";
import React from "react";

export const Button = ({ variant, children, className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border py-3  rounded-lg  w-[150px]",
        {
          "bg-black border-transparent text-white": variant === "dark",
          "bg-red border-transparent ": variant === "danger",
          "bg-white hover:bg-black hover:text-white hover:transition-colors":
            variant === "outline",
          "bg-black hover:bg-white hover:text-black text-white hover:transition-colors":
            variant === "outline-black",
          "bg-primary   text-white ": variant === "primary",
          // "bg-yellow border-transparent": variant === "yellow",
          // "bg-secondary-50": variant === "secondary-50",
          // "bg-white": variant === "white",
          // "bg-green-50": variant === "green-50",
          // "bg-secondary-500": variant === "secondary-500",
          // " border-green-600": variant === "border-green",
        },
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
};
