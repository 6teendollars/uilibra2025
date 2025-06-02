import React, {useState} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Button from "./Button";

const backdrop = cva(
  "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300",
  {
    variants: {
      open: {
        true: "opacity-100 pointer-events-auto",
        false: "opacity-0 pointer-events-none",
      },
    },
  }
);

const modal = cva(
  "bg-white rounded-2xl shadow-xl p-3 w-full mx-4 transition-all duration-300 transform",
  {
    variants: {
      open: {
        true: "scale-100 translate-y-0",
        false: "scale-95 translate-y-4",
      },
      size: {
        small: "max-w-md",
        medium: "max-w-2xl",
        large: "max-w-4xl",
      },
    },
    defaultVariants: {
      size: "medium",
      open: true,
    },
  }
);

const imageContainer = cva(
  "w-full h-[60%] overflow-hidden rounded-t-[16px] rounded-b-[16px]"
);

const image = cva("w-full h-full object-cover");

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backdrop>,
    VariantProps<typeof modal> {
  open: boolean;
  onClose: () => void;
  imageSrc?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  className,
  children,
  size,
  imageSrc,
  title,
  description,
  ...props
}) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
	console.log("click")
  };

  const [opens, setOpens] = useState(false);

  return (
	<div
	  className={clsx(backdrop({ open }), className)}
	  onClick={handleClickOutside}
	  {...props}
	>
	  <div className={modal({ open, size })}>
		<div className="flex flex-row gap-6 p-6 max-w-5xl w-full bg-white rounded-lg">
		  {imageSrc && (
			// <div className="w-1/2 flex justify-end">
			<div className={imageContainer()}>

			  <img src={imageSrc} alt="Modal" className={image()} />
			</div>
		  )}
		  <div className="w-1/2 flex flex-col justify-between p-3">
		  <h3 className="text-2xl font-bold mb-2">{title}</h3>
		  <p className="text-gray-600 mb-4">{description}</p>
			
      <div className="flex">  
      <Button className="w-full" intent="primary" size="small" onClick={() => setOpens(false)}>
            Close
          </Button>
              </div>
              {children}
		  </div>
		</div>
	  </div>
	</div>
  );
};

export default Modal;
