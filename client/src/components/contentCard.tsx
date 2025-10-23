// import z from "zod";
import { Card } from "./ui/Card";
import type { Content, 
  // contentSchema 
} from "../lib/types";
import { Icons } from "./ui/Icons";
import { NewContentCard } from "./NewCard";
// import type { JSX } from "react";

// enum contentType {"document", "tweet", "youtube" , "link"}

// export type content = {
//     id : string,
//     link : string,
//     title : string,
//     type : contentType

// }

// interface contentProps {
//     content : content
// }

// const contentTypeSchema = z.enum(["document", "tweet", "youtube" , "link"]);
// const contentTagsSchema = z.object({
//     id : z.string(),
//     title : z.string(),
// })
// export const contentSchema = z.object({
//     id : z.string(),
//     link : z.string(),
//     title : z.string(),
//     type : contentTypeSchema,
//     tags : z.array(contentTagsSchema),
//     userId : z.string(),
// });

type Variant = "user" | "shared";

interface ContentCardProps {
  content: Content;
  variant: Variant;
}

const typeToIcon = {
  document: <Icons.document className="w-4 h-4" />,
  link: <Icons.link2 className="w-5 h-5" />,
  youtube: <Icons.video className="w-4 h-4" />,
  tweet: <Icons.twitter className="w-4 h-4" />,
} as const;

export const ContentCard = ({ content, variant }: ContentCardProps) => {
  const isUser = variant === "user";
  const Link = content.link;
  return (
    <Card className="flex flex-col gap-y-3 max-w-sm h-full shadow-md">
      {/* <p>{content.id}</p> */}
      <div className="flex gap-x-4 justify-between">
        {/* {content.type === "document" ? <Icons.document/> | ""} 
        {content.type === "link" ?? <Icons.link/>} ||   
        {content.type === "youtube" ?? <Icons.video/>} || 
        {content.type === "twitter" ?? <Icons.twitter/> } */}
        <div className="flex items-center">{typeToIcon[content.type]}</div>
        <p className="">{content.title}</p>

        {isUser && (
          <div className="flex space-x-3 items-center ">
            <Icons.share2 className="w-5 h-5" />
            <Icons.trash className="w-5 h-5" />
          </div>
        )}
      </div>
      {/* <div className="break-words text-justify">
        <p>{content.link}</p>
      </div> */}

      <div className="" >
        <NewContentCard link={Link}/>
      </div>

      {/* {content.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600"
          >
            #{tag}
          </span>
        ))} */}
      {/* <p>{content.type}</p> */}
      {/* <p>{content.userId}</p> */}
    </Card>
  );
};

// export default ContentCard;
