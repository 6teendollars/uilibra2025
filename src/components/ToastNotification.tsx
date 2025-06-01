import React, { useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"

const notification = cva(
	"pointer-events-auto w-1/5 rounded-[12px] px-8 py-6 shadow-lg text-white text-sm animate-fade-in-up transition-all duration-500 transform",
	{
		variants:{
			intent:{
				info:[
					"bg-sky-400"

				],
				success:[
					"bg-green-400"
				],
				error:[
					"bg-red-400"
				],
				warning:[
					"bg-yellow-400"
				],
			},
			condition:{
				true:"opacity-100 translate-y-0",
				false:"opacity-0 -translate-y-2 pointer-events-none"
			}
		},
		defaultVariants:{
			intent:"info",
			condition:true
		}
	}
)

//ICONS SVG
const InfoIcon = () => (
	<svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/>
</svg>


  );
  
  const SuccessIcon = () => (
	<svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
	  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7"/>
	</svg>
  );
  
  const ErrorIcon = () => (
	<svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
	  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
	</svg>
  );
  
  const WarningIcon = () => (
	<svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

  );
  

  const getIcondByIntent = (intent: ToastProps["intent"]) => {
	switch (intent){
		case "success": return <SuccessIcon/>;
		case "error": return <ErrorIcon/>;
		case "info": return <InfoIcon/>;
        case "warning": return <WarningIcon/>

	}
  }



export interface ToastProps 
extends React.HTMLAttributes<HTMLDivElement>,
VariantProps<typeof notification> {
	message: string;
	duration?: number;
	onClose: () => void;
	condition: boolean;
}

const Toast: React.FC<ToastProps> = ({
	message,
	className,
	intent,
	condition,
	duration = 5000,
	onClose,
	...props
}) => {

	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
		  setVisible(false);
		  onClose?.();
		}, duration);
	
		return () => clearTimeout(timeout);
	  }, [duration, onClose]);

	  if(!visible) return null;

	
	return ( 
		<div className={clsx(notification({ intent, condition }), className)} {...props} >
			<div className="flex gap-2 items-start align-item-center">
				<div >{getIcondByIntent(intent)}</div>
			    <div >{message}</div>
		
			</div>
		</div>
	)
}

export default Toast;