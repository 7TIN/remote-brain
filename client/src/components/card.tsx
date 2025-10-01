import type React from "react"
import { cn } from "../lib/utils"

export const Card = ({children,className} : React.ComponentProps<"div">)  => {
    return (
        <div className={cn("flex flex-col bg-white rounded-md shadow-sm h-auto p-4", className)}>
            {children}
        </div>
    )
}