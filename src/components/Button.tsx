import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary";
}) => {
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white"
      : "bg-secondary text-white";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md cursor-pointer ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
