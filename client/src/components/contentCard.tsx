import z from "zod";
import { Card } from "./ui/Card";
import type { contentSchema } from "../lib/types";
import { Icons } from "./ui/Icons";
import type { JSX } from "react";

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

type Content = z.infer<typeof contentSchema>;

const typeToIcon: Record<Content["type"], JSX.Element> = {
  document: <Icons.document className="w-4 h-4" />,
  link: <Icons.link2 className="w-5 h-5" />,
  youtube: <Icons.video className="w-4 h-4" />,
  tweet: <Icons.twitter className="w-4 h-4" />,
};

const ContentCard = ({ content }: { content: Content }) => {
  return (
    <Card className="flex flex-col gap-y-3 justify-between max-w-xs h-full p-4 shadow-md">
      {/* <p>{content.id}</p> */}
      <div className="flex gap-x-4 justify-between">
        {/* {content.type === "document" ? <Icons.document/> | ""} 
        {content.type === "link" ?? <Icons.link/>} ||   
        {content.type === "youtube" ?? <Icons.video/>} || 
        {content.type === "twitter" ?? <Icons.twitter/> } */}
        <div className="flex items-center">{typeToIcon[content.type]}</div>
        <p className="">{content.title}</p>
        <div className="flex space-x-3 items-center ">
          <Icons.share2 className="w-5 h-5" />
          <Icons.trash className="w-5 h-5" />
        </div>
      </div>
      <div className="break-words text-justify">
        <p>{content.link}</p>
      </div>

      <p>{content.tags}</p>
      {/* <p>{content.type}</p> */}
      {/* <p>{content.userId}</p> */}
    </Card>
  );
};

export default ContentCard;
