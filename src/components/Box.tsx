import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";


const box = cva("cursor-pointer border-2 transition-colors", {
	variants: {
	  intent: {
		check: "rounded border-sky-500 peer-checked:bg-sky-500",
		radio: "rounded-full border-sky-500 peer-checked:bg-sky-500",
	  },
		size:{
			small: "w-4 h-4",
            medium: "w-5 h-5",
            large: "w-6 h-6",
		}
	},
	defaultVariants:{
		intent: "check",
		size: "medium"
	}
}
)


const CustomIcon = () =>(<svg  className="stroke-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17l5 5 12-12M16 20l2 2 12-12"></path> </g></svg>)
const CustomIconRadio = () => (<svg className="stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Radio_Fill"> <g id="Vector"> <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>)
  


export interface BoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof box> {
  text: string;
  size: string;
}


 const Box: React.FC<BoxProps> = ({
	className,
	intent,
	text,
	size,
	...props
 }) => {
  
	const inputType = intent === 'check' ? 'checkbox' : 'radio';
	const id = React.useId();

	return(

<label htmlFor={id} className="group flex items-center text-gray-500  cursor-pointer gap-2">
	<input
        id={id}
        type={inputType}
        className="peer sr-only"
        {...props}
      />
	  <span className={clsx(box({ intent, size }), className, "text-transparent peer-checked:text-white")} >
		{/* <span className="transition-all duration-300 opacity-0  group-hover:opacity-100"> */}
	{intent === 'check' ? <CustomIcon/> : <CustomIconRadio/>} 
	{/* </span> */}
	  </span>
      <p className="cursor-pointer">{text}</p>
	</label>


	)
 }

 export default Box;


