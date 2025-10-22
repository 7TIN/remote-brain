// import type { ReactNode } from "react";
import type React from "react"
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant? : "primary" | "secondary";
    size? : "sm" | "md" | "lg";
    text? : string;
    className? : string;
    icon? : ReactNode;
    // onClick? : () => void;
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
    {
        variant, size, className, icon, text, ...props

    } : ButtonProps
    // {children} : {children : React.ReactNode}, 
    // props: ButtonProps,
) =>  {
    return (
        <button 
        // onClick={onClick}  
        className={cn(variantStyles[variant ?? "default"], sizeStyles[size ?? "sm"], className)} {...props}>
            {icon}{text}
        </button>
    )
}

export {Button}