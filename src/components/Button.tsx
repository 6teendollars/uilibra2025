import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx"; // для объединения классов

const button = cva(
  "font-bold uppercase rounded-full cursor-pointer transition-all duration-500 text-center box-border",
  {
    variants: {
      intent: {
        primary: [
          "bg-gray",
          "text-sky-500",
          "border",
          "border-sky-500",
          "hover:bg-sky-500	",
          "hover:text-white",
          "hover:from-fuchsia-600",
          "hover:to-cyan-400",
          "hover:border-white-500",
        ],
        secondary: [
          "bg-white",
          "text-sky-500",
          "border",
          "border-sky-100",
          "shadow",
          "hover:bg-gradient-to-r",
          "hover:from-white",
          "hover:to-sky-500",
          "hover:text-white",
          // "hover:border-none"
        ],
        unavailable:[
          "bg-gray",
          "text-sky-500",
          "border",
          "border-sky-500",
          "hover:bg-sky-500	",
          "hover:text-white",
          "hover:from-fuchsia-600",
          "hover:to-cyan-400",
          "hover:border-white-500",
           "opacity-50", 
        ],
      },
      size: {
        small: ["text-xs", "py-2", "px-6"],
        medium: ["text-md", "py-3", "px-8"],
        large: ["text-base", "py-4", "px-10"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button
      className={clsx(button({ intent, size }), className)}
      {...props}
    />
  );
};

export default Button;
