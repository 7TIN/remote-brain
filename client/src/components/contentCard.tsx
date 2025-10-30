import { Card, CardContent, CardHeader } from "./ui/Card";
import type { Content, ContentType } from "../lib/types";
import { Icons } from "./ui/Icons";
import { cn } from "../lib/utils";
import { useState, type JSX } from "react";
import { EmbeddedCard } from "./EmbeddedCard";
import { Button } from "./ui/Button";

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
  className?: string;
}

const typeToIcon: Record<ContentType, JSX.Element> = {
  document: <Icons.document className="w-5 h-5" />,
  link: <Icons.link2 className="w-5 h-5" />,
  youtube: <Icons.video className="w-5 h-5" />,
  tweet: <Icons.twitter className="w-5 h-5" />,
};

export const ContentCardTitle = ({
  title,
  type,
  variant,
  domain,
  className,
  link,
}: {
  title: string;
  type: ContentType;
  variant?: string;
  domain: string;
  className?: string;
  link: string;
}) => {
  const isUser = variant === "user";
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("flex justify-between gap-x-4 items-center ", className)}>
      <div className="flex items-center justify-center">
        {(type !== "link" && typeToIcon[type]) ||
          (domain !== "medium.com" && typeToIcon[type]) || (
            <Icons.mediumLogo className="rounded-xs text-white bg-neutral-950 font-[Kaisei Opti]" />
          )}
      </div>
      <h3 className="text-center truncate overflow-hidden " title={title}>{title}</h3>
      <div>
        {isUser && (
          <div className="flex space-x-4 items-center relative">
            <Icons.share2
              className="w-5 h-5 "
              onClick={() => {
                setOpen((o) => !o);
              }}
            />
            {open && (
              <div className="absolute z-10 mx-auto top-2.5 max-w-80 rounded-md shadow-ace">
                <Card className="p-1 flex gap-y-2">
                  <CardHeader className="flex flex-row justify-between border-b border-neutral-300">
                    Share Link
                    <Icons.crossLogo
                      onClick={() => {
                        setOpen((c) => !c);
                      }}
                    />
                  </CardHeader>
                  <CardContent className="border border-neutral-300 p-1 rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="m-1 text-xs overflow-hidden truncate whitespace-nowrap">{link}</span>
                      <Button onClick={() => navigator.clipboard.writeText(link)} text="Copy" className="bg-neutral-700 rounded-lg cursor-pointer active:bg-neutral-950 text-xs py-1 px-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            <Icons.trash className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export const ContentCard = ({
  content,
  variant,
  className,
}: ContentCardProps) => {
  const domain = content.link.split("://")[1].split("/")[0];
  return (
    <Card
      className={cn("flex flex-col gap-y-3 max-w-sm h-full p-2 border border-neutral-300 shadow-ace", className)}
    >
      <CardHeader className="w-full items-center justify-center border-b border-b-neutral-300">
        <ContentCardTitle
          title={content.title}
          type={content.type}
          domain={domain}
          link={content.link}
          variant={variant}
          className="w-full p-4"
        />
      </CardHeader>
      <CardContent>
        <EmbeddedCard link={content.link} domain={domain} className="" />
      </CardContent>
    </Card>
  );
};

// export const ContentCard = ({ content, variant }: ContentCardProps) => {
//   const isUser = variant === "user";
//   const Link = content.link;
//   return (
//     <Card className="flex flex-col gap-y-3 max-w-sm h-full shadow-md">
//       {/* <p>{content.id}</p> */}
//       <div className="flex gap-x-4 justify-between">
//         {/* {content.type === "document" ? <Icons.document/> | ""}
//         {content.type === "link" ?? <Icons.link/>} ||
//         {content.type === "youtube" ?? <Icons.video/>} ||
//         {content.type === "twitter" ?? <Icons.twitter/> } */}
//         <div className="flex items-center">{typeToIcon[content.type]}</div>
//         <p className="">{content.title}</p>

//         {isUser && (
//           <div className="flex space-x-3 items-center ">
//             <Icons.share2 className="w-5 h-5" />
//             <Icons.trash className="w-5 h-5" />
//           </div>
//         )}
//       </div>
//       {/* <div className="break-words text-justify">
//         <p>{content.link}</p>
//       </div> */}

//       <div className="" >
//         <NewContentCard link={Link}/>
//       </div>

//       {/* {content.tags.map((tag) => (
//           <span
//             key={tag}
//             className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600"
//           >
//             #{tag}
//           </span>
//         ))} */}
//       {/* <p>{content.type}</p> */}
//       {/* <p>{content.userId}</p> */}
//     </Card>
//   );
// };

// // export default ContentCard;
