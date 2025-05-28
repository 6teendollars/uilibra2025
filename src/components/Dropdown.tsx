import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const dropdown = cva(
	"relative inline-block",
	{
		variants:{
			intent:{
				click: "",
				hover: ""
			}
		},
		defaultVariants:{
			intent: "click"
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
	...props
}) => {
	const [open, setOpen] = useState(false);

	return(
<div className={clsx(dropdown({ intent }), className)}

	{...props}>

<div onClick={() => setOpen(!open)} className="border px-4 py-2 rounded cursor-pointer bg-white">{placeholder}</div>

{open && (
	<ul className="absolute mt-2 w-full bg-write border rouded shadow">
			{options.map((option, index) => (
				<li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
					{option}
				</li>
			))}
	</ul>
)}
</div>
	)
}

export default DropDown