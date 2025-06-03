// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var button = cva(
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
          "hover:border-white-500"
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
          "hover:text-white"
          // "hover:border-none"
        ],
        unavailable: [
          "bg-gray",
          "text-sky-500",
          "border",
          "border-sky-500",
          "hover:bg-sky-500	",
          "hover:text-white",
          "hover:from-fuchsia-600",
          "hover:to-cyan-400",
          "hover:border-white-500",
          "opacity-50"
        ]
      },
      size: {
        small: ["text-xs", "py-2", "px-6"],
        medium: ["text-md", "py-3", "px-8"],
        large: ["text-base", "py-4", "px-10"]
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "medium"
    }
  }
);

// src/components/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var card = cva(
  "flex flex-col items-center justify-between rounded-[32px] p-4 shadow-md transition-transform  duration-300 ease-in-out translation-transform transition-shadow duration-300 easy-in-out cu bg-custom-gray translation-shadow hover:shadow-[5px_5px_10px_#0096FF,_-5px_-5px_10px_#A7C7E7] cursor-pointer",
  {
    variants: {
      intent: {
        available: "bg-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg",
        unavailable: "bg-white opacity-50 cursor-not-allowed"
      },
      size: {
        small: "w-[200px] h-[330px]",
        medium: "w-[300px] h-[550px]",
        large: "w-[500px] h-[850px]"
      }
    }
  }
);
var imageContainer = cva(
  "w-full h-[60%] overflow-hidden rounded-t-[32px] rounded-b-[16px]"
);
var image = cva("w-full h-full object-cover");
var content = cva("p-4 text-center flex flex-col items-center justify-between flex-1");

// src/components/Box.tsx
import React from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var box = cva(
  "cursor-pointer border-2 transition-colors",
  {
    variants: {
      intent: {
        check: "rounded border-sky-500 peer-checked:bg-sky-500",
        radio: "rounded-full border-sky-500 peer-checked:bg-sky-500"
      },
      size: {
        small: "w-4 h-4",
        medium: "w-5 h-5",
        large: "w-6 h-6"
      }
    },
    defaultVariants: {
      intent: "check",
      size: "medium"
    }
  }
);

// src/components/Dropdown.tsx
import { useState } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var dropdown = cva(
  "relative ",
  {
    variants: {
      intent: {
        click: "",
        hover: "group"
      },
      size: {
        small: "w-1/6",
        medium: "w-1/2",
        large: "w-full"
      }
    },
    defaultVariants: {
      intent: "click",
      size: "medium"
    }
  }
);

// src/components/Input.tsx
import React3 from "react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var input = cva(
  "rounded-full border border-sky-500 hover:border-gray-300 focus:outline-none text-gray-500 placeholder-gray-400",
  {
    variants: {
      intent: {
        default: ["hover: border-gray-500"]
      },
      size: {
        small: ["text-sm", "py-2 pl-10 pr-6"],
        medium: ["text-base", "py-2 pl-10 pr-6"],
        large: ["text-lg", "py-2 pl-10 pr-6"],
        full: ["w-full", "text-lg", "py-2 pl-10 pr-6"]
      }
    },
    defaultVariants: {
      intent: "default",
      size: "full"
    }
  }
);

// src/components/Modal.tsx
import { useState as useState3 } from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var backdrop = cva(
  "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300",
  {
    variants: {
      open: {
        true: "opacity-100 pointer-events-auto",
        false: "opacity-0 pointer-events-none"
      }
    }
  }
);
var modal = cva(
  "bg-white rounded-2xl shadow-xl p-3 w-full mx-4 transition-all duration-300 transform",
  {
    variants: {
      open: {
        true: "scale-100 translate-y-0",
        false: "scale-95 translate-y-4"
      },
      size: {
        small: "max-w-md",
        medium: "max-w-2xl",
        large: "max-w-4xl"
      }
    },
    defaultVariants: {
      size: "medium",
      open: true
    }
  }
);
var imageContainer2 = cva(
  "w-full h-[60%] overflow-hidden rounded-t-[16px] rounded-b-[16px]"
);
var image2 = cva("w-full h-full object-cover");

// src/components/Sidebar.tsx
import { useState as useState4 } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var sideb = cva(
  "bg-white text-gray-500 shadow translate-all",
  {
    variants: {
      intent: {
        min: "rounded-[16px] w-[70px] pt-6 pb-6",
        full: "rounded-[16px] p-6 pb-6 gap-3 "
      },
      screen: {
        auto: "",
        page: "h-screen"
      },
      size: {
        medium: "w-[250px]",
        large: "w-[350px]"
      }
    },
    defaultVariants: {
      intent: "full",
      size: "medium",
      screen: "page"
    }
  }
);
var StyleComp = cva("flex justify-between items-center rounded-[16px] pl-3 cursor-pointer border-sky-500 hover:text-sky-500 hover:p-3 hover:bg-gray-200 hover:pl-4 duration-300");
var SvgStyleComp = cva("rounded-[16px] cursor-pointer border-sky-500 hover:text-sky-500 hover:p-3 hover:bg-gray-200 duration-300");

// src/components/ToastNotification.tsx
import { useEffect, useState as useState5 } from "react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var notification = cva(
  "pointer-events-auto w-1/5 rounded-[12px] px-8 py-6 shadow-lg text-white text-sm animate-fade-in-up transition-all duration-500 transform",
  {
    variants: {
      intent: {
        info: [
          "bg-sky-400"
        ],
        success: [
          "bg-green-400"
        ],
        error: [
          "bg-red-400"
        ],
        warning: [
          "bg-yellow-400"
        ]
      },
      condition: {
        true: "opacity-100 translate-y-0",
        false: "opacity-0 -translate-y-2 pointer-events-none"
      }
    },
    defaultVariants: {
      intent: "info",
      condition: true
    }
  }
);
