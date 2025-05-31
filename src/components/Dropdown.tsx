import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const dropdown = cva(
	"relative ",
	{
		variants:{
			intent:{
				click: "",
				hover: "group"
			},
			size:{
				small: "w-1/6",
				medium: "w-1/2",
				large: "w-full"
			}
		},
		defaultVariants:{
			intent: "click",
			size: "medium"
		}
	}
)



export interface DropDownProps
extends React.HTMLAttributes<HTMLDivElement>,
VariantProps<typeof dropdown>
 {
	options: string[];
	placeholder?: string;
}

const DropDown: React.FC<DropDownProps> = ({
	className,
	options,
	placeholder = "Select...",
	intent,
	size,
	...props
}) => {
	const [open, setOpen] = useState(false);
	const isClick = intent === "click";

	return (
		<div
		  className={clsx(dropdown({ intent,size }), className)}
		  {...props}
		>
		  <div
			onClick={isClick ? () => setOpen(!open) : undefined}
			className="border px-4 py-2 rounded-[12px] cursor-pointer bg-white text-gray-400"
		  >
			{placeholder}
		  </div>
	
		  {isClick ? (
			open && (
			  <ul className="absolute mt-2 w-full bg-white border rounded-[12px] shadow z-10">
				{options.map((option, index) => (
				  <li
					key={index}
					className="px-4 py-2 text-gray-400 cursor-pointer  hover:text-sky-500"
				  >
					{option}
				  </li>
				))}
			  </ul>
			)
		  ) : (
			<ul className="absolute mt-2 w-full bg-white border rounded-[12px] shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
			  {options.map((option, index) => (
				<li
				  key={index}
				  className="px-4 py-2 text-gray-400 cursor-pointer  hover:text-sky-500"
				>
				  {option}
				</li>
			  ))}
			</ul>
		  )}
		</div>
	  )}

export default DropDown