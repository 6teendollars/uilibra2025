import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Button from "./Button";
// import Image from "next/image";

const card = cva(
  "flex flex-col items-center justify-between rounded-[32px] p-4 shadow-md transition-transform  duration-300 ease-in-out translation-transform transition-shadow duration-300 easy-in-out cu bg-custom-gray translation-shadow hover:shadow-[5px_5px_10px_#0096FF,_-5px_-5px_10px_#A7C7E7] cursor-pointer",
  {
    variants: {
      intent: {
        available: "bg-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg",
        unavailable: "bg-white opacity-50 cursor-not-allowed", 
      },
      size: {
        small: "w-[200px] h-[330px]",
        medium: "w-[300px] h-[550px]",
        large: "w-[500px] h-[850px]",
      },
    },
  }
);

const imageContainer = cva(
  "w-full h-[60%] overflow-hidden rounded-t-[32px] rounded-b-[16px]"
);

const image = cva("w-full h-full object-cover");

const content = cva("p-4 text-center flex flex-col items-center justify-between flex-1");
// const contentTitle = cva("p-1 text-center flex flex-col items-center justify-between flex-1");


export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  imageSrc: string;
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  className,
  intent = "available",
  size = "medium",
  imageSrc,
  title,
  description,
  buttonLabel,
  // buttonLabelSec,
  onButtonClick,
  // onButtonSecond,
  ...props
}) => {
  return (
    <div className={clsx(card({ intent, size }), className)} {...props}>
      {/* <div className={contentTitle()}> */}
        {/* </div> */}
      <div className={imageContainer()}>
           <img  src={imageSrc} alt={title} className={image()}/>/
           {/* <Image src={imageSrc} alt={title} className={image()}/> */}
      </div>
      <div className={content()}>
      <h3 className={clsx("font-semibold mb-2 text-black"
          , size === "small" ? "text-sm" : size === "medium" ? "text-base": "text-lg"
          )}
          >
            {title}
          </h3>
        <p className="text-sm mb-4 text-gray-500 break-words max-w-full overflow-hidden">{description}</p>
        <Button className="flex row-reverse" size={size === "small" ? "small" : "medium"} onClick={onButtonClick}>{buttonLabel}</Button>
      </div>
    </div>
  );
};

export default Card;
