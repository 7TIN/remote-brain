// import type { ReactNode } from "react";
import type React from "react"
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant? : "primary" | "secondary";
    size? : "sm" | "md" | "lg";
    text? : string;
    className : string;
    icon? : SVGElement;
    onClick? : () => void;
}

const variantStyles = {
    "primary" : "bg-indigo-500 text-white",
    "secondary" : "bg-indigo-200 text-blue-400",
    "default" : "bg-neutral-900 text-white"
}

const sizeStyles = {
    "sm" : "p-2",
    "md" : "p-4",
    "lg" : "p-6"
}

const Button = (
    // {children} : {children : React.ReactNode}, 
    props: ButtonProps
) =>  {
    return (
        <button className={cn(variantStyles[props.variant ?? "default"], sizeStyles[props.size ?? "sm"] ,props.className)}>
            {props.text}
        </button>
    )
}

export {Button}