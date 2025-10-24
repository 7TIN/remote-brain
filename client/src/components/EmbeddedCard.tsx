// import React from 'react'
import { XEmbed } from "react-social-media-embed";
import { YouTubeEmbed } from "react-social-media-embed";
import { cn } from "../lib/utils";

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
        )) || (Link === "twitter.com" && (
          <div className={cn("bg-white p-px rounded-md overflow-visible antialiased will-change-transform",className)}>
            <XEmbed url={link.replace("twitter.com","x.com")} />
          </div>
        )) }
    </>
  );
};
