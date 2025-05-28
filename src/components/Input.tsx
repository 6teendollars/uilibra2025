import React, { useState }from "react";
import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx";

const input = cva(
	"rounded-full border border-sky-500 hover:border-gray-300 focus:outline-none text-gray-500 placeholder-gray-400",
{
	variants:{
		intent:{
			default: [ "hover: border-gray-500"],
		},
		size:{
			small:["text-sm", "py-2 pl-10 pr-6"],
			medium: ["text-base", "py-2 pl-10 pr-6"],
			large: ["text-lg", "py-2 pl-10 pr-6"],
			full:["w-full","text-lg", "py-2 pl-10 pr-6"]
		}
	},
	defaultVariants:{
		intent: "default",
		size: "full"
	}
}
);

const SearchIcon: React.FC<{ show: boolean}>  = ({show}) => (
<svg className={clsx("w-6 h-6 transition-all duration-300", show ? "rotate-90 text-gray-400 " : "rotate-0 text-blue-400")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>
)

export interface InputProps
// extends React.InputHTMLAttributes<HTMLInputElement>,
extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
VariantProps<typeof input> {}

const Input: React.FC<InputProps> = ({
	className,
	intent,
	size,
	...props
}) => {

	const [value, setValue] = React.useState("");
	const [isFocused, setIsFocused] = React.useState(false);

	return(
	<div className="relative flex items-center">
		
		<input className={clsx(input({ intent, size }), className)}
		
	{...props}
	value={value}
	onChange={e => setValue(e.target.value)}
	onFocus={() => setIsFocused(true)}
	onBlur={() => setIsFocused(false)}
	/>
	<div className="absolute left-3">
		<SearchIcon show={isFocused || value !== ""}/>
		</div>
	</div>
	)
	
};

export default Input;