// import React from 'react'
import { XEmbed } from "react-social-media-embed";
import { YouTubeEmbed } from "react-social-media-embed";
import { cn } from "../lib/utils";
// import { Icons } from "./ui/Icons";
import { MediumCard } from "./Medium";

type EmbeddedCardProps = {
  link: string;
  className?: string;
};

export const EmbeddedCard = ({ link, className }: EmbeddedCardProps) => {
  const Link = link.split("://")[1].split("/")[0];
  return (
    <>
      {(Link === "youtu.be" && (
        <div
          className={cn(
            "bg-white border border-slate-300 py-1 overflow-visible antialiased will-change-transform flex justify-center items-center",
            className
          )}
        >
          <YouTubeEmbed
            className="bg-white"
            height={200}
            width={312}
            url={link}
          />
        </div>
      )) ||
        (Link === "x.com" && (
          <div
            className={cn(
              "bg-white p-px rounded-md overflow-visible antialiased will-change-transform",
              className
            )}
          >
            <XEmbed url={link} />
          </div>
        )) ||
        (Link === "twitter.com" && (
          <div
            className={cn(
              "bg-white p-px rounded-md overflow-visible antialiased will-change-transform",
              className
            )}
          >
            <XEmbed url={link.replace("twitter.com", "x.com")} />
          </div>
        )) || (Link === "medium.com" && (
          <MediumCard link={link}/>
        )) 
        }
    </>
  );
};

      //     <a href={link} target="_blank"  rel="noopener noreferrer" className="inline-block">
      //       <div className="relative rounded-lg border border-neutral-200 hover:shadow-sm transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group">
      //         {/* <img src={"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5NKHQDjC1cUC441HTejxuQ.png"} className="" alt="medium" /> */}
      //         <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-95">
      //                         <img src={"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5NKHQDjC1cUC441HTejxuQ.png"} className="" alt="medium" />
      //   </div>
      //       </div>
      //       <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100">
      //     <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
      //       <span>Visit here</span>
      //       <Icons.link className="w-5 h-5" />
      //     </div>
      //     <p className="text-sm text-gray-600 dark:text-gray-400 text-center px-4 break-all">{link}</p>
      // </div>
      //     </a>