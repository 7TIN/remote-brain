import type React from "react"
import { cn } from "../../lib/utils"

export const Card = ({className, ...props} : React.ComponentProps<"div">)  => {
    return (
        <div className={cn("flex flex-col bg-white rounded-md shadow-sm h-auto", className)}{...props}/>
    )
}

export const CardHeader = ({className, ...props} : React.ComponentProps<'div'>) => {
    return (
        <div className={cn("flex flex-col gap-y-2",className)} {...props} />
    )
}

export const CardContent = ({className, ...props} : React.ComponentProps<'div'>) => {
    return (
        <div className={cn("",className)} {...props} />
    )
}