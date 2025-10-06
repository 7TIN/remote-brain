import z from "zod";
import { Card } from "./ui/Card";
import type { contentSchema } from "../lib/types";

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



type Content = z.infer<typeof contentSchema> ;

const ContentCard = ({ content }: { content: Content }) => {
    return (
        <Card className="max-h-2xl h-fit max-w-sm shadow-md flex flex-col justify-center items-center p-5">
            {/* <p>{content.id}</p> */}
            <p>{content.title}</p>
            <p>{content.link}</p>
            <p>{content.tags}</p>
            <p>{content.type}</p>
            {/* <p>{content.userId}</p> */}
        </Card>
    );
}

export default ContentCard;