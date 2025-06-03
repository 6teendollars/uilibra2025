import React, { useState } from "react";
import {cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { motion } from "framer-motion";

const sideb = cva("bg-white text-gray-500 shadow translate-all",
	{
		variants: {
			intent:{
				min:"rounded-[16px] w-[70px] pt-6 pb-6",
				full:"rounded-[16px] p-6 pb-6 gap-3 "
			},
			screen:{
				auto:"",
				page:"h-screen"
				
			},

		size:{
			medium:"w-[250px]",
			large:"w-[350px]",
		}
	},
	defaultVariants:{
		intent:"full",
		size: "medium",
		screen: "page"
	}
}
)

//SVG
const SvgIcon = () => (<svg className="w-[15px] h-[14px] text-sky-500 dark:text-sky " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m9 5 7 7-7 7"/>
  </svg>
)
const SvgBack = ({ onClick }: { onClick?: () => void }) => (<svg onClick={onClick} className="w-[20px] h-[20px] text-gray-500 dark:text-gray cursor-pointer transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m14 8-4 4 4 4"/>
  </svg>
  
  
  
  )

const SvgShow = ({ onClick }: { onClick?: () => void }) => (<svg onClick={onClick} className="w-[20px] h-[20px] text-gray-500 dark:text-gray cursor-pointer transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m10 16 4-4-4-4"/>
  </svg>
  )

  const SvgHome = () => (<svg className="w-[25px] h-[25px] text-sky-500 dark:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
  </svg>
  )

  const SvgProd = () => (<svg className="w-[25px] h-[25px] text-sky-500 dark:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
  </svg>
  )

  const SvgInfo = () => (<svg className="w-[25px] h-[25px] text-sky-500 dark:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  )

  const SvgCont = () => (<svg className="w-[25px] h-[25px] text-sky-500 dark:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.693 16.013H7.31a1.685 1.685 0 0 0 1.685-1.684v-.645A1.684 1.684 0 0 1 10.679 12h2.647a1.686 1.686 0 0 1 1.686 1.686v.646c0 .446.178.875.494 1.19.316.317.693.495 1.14.495h1.685a1.556 1.556 0 0 0 1.597-1.016c.078-.214.107-.776.088-1.002.014-4.415-3.571-6.003-8-6.004-4.427 0-8.014 1.585-8.01 5.996-.02.227.009.79.087 1.003a1.558 1.558 0 0 0 1.6 1.02Z"/>
  </svg>
  )

  const SvgTeam = () => (<svg className="w-[25px] h-[25px] text-sky-500 dark:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"/>
  </svg>
  )

  const SvgCom = () => (<svg className="w-[25px] h-[25px] text-sky-500 dark:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"/>
  </svg>
  )

//style
const StyleComp = cva("flex justify-between items-center rounded-[16px] pl-3 cursor-pointer border-sky-500 hover:text-sky-500 hover:p-3 hover:bg-gray-200 hover:pl-4 duration-300")
const SvgStyleComp = cva("rounded-[16px] cursor-pointer border-sky-500 hover:text-sky-500 hover:p-3 hover:bg-gray-200 duration-300")





//EX INTERFACE 
export interface SideProps
extends React.HTMLAttributes<HTMLDivElement>,
VariantProps<typeof sideb>{}


const SideBar: React.FC<SideProps> = ({
	className,
	intent: initialIntent,
	size,
	screen,
	...props
}) => {

	const [currentIntent, setCurrentIntent] = useState<"full" | "min">(initialIntent ?? "full" )

	const toggleIntent = () => { 
		setCurrentIntent(prev => (prev === "full" ? "min" : "full"))
	}

	
	if (currentIntent === "min") {
		return (
			
		  <div className={clsx(sideb({ intent:"min", size, screen }), className, "transition-all duration-300")} {...props}>
			{/* Mini Sidebar layout */}
			<div className="flex flex-col items-center gap-3 ">
			<div > <SvgShow onClick={toggleIntent} /></div>
				<div className={SvgStyleComp()}> <SvgHome /></div>
				<div className={SvgStyleComp()}> <SvgProd /></div>
				<div className={SvgStyleComp()}> <SvgInfo /></div>
				<div className={SvgStyleComp()}> <SvgCont /></div>
				<div className={SvgStyleComp()}> <SvgTeam /></div>
				<div className={SvgStyleComp()}> <SvgCom /></div>
				

			 
			</div>
			
        
        
		  </div>
		);
	  }

	  
	  return (
		<div className={clsx(sideb({ intent: "full", size, screen }), className," duration-300")} {...props}>
			<div className="flex justify-end">
				<SvgBack onClick={toggleIntent} />
			</div>
			<div className="flex flex-col gap-3 pt-4">
				<div className={StyleComp()}>
					<div className="flex gap-3 items-center">
						<SvgHome />
						<p>Home</p>
					</div>
					<SvgIcon />
				</div>
				<div className={StyleComp()}>
					<div className="flex gap-3 items-center">
						<SvgProd />
						<p>Product</p>
					</div>
					<SvgIcon />
				</div>
				<div className={StyleComp()}>
					<div className="flex gap-3 items-center">
						<SvgInfo />
						<p>About</p>
					</div>
					<SvgIcon />
				</div>
				<div className={StyleComp()}>
					<div className="flex gap-3 items-center">
						<SvgCont />
						<p>Contact</p>
					</div>
					<SvgIcon />
				</div>
				<div className={StyleComp()}>
					<div className="flex gap-3 items-center">
						<SvgTeam />
						<p>Team</p>
					</div>
					<SvgIcon />
				</div>
				<div className={StyleComp()}>
					<div className="flex gap-3 items-center">
						<SvgCom />
						<p>Community</p>
					</div>
					<SvgIcon />
				</div>
			</div>
		</div>
	)

	
}


export default SideBar;