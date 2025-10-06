import z from "zod";

export const contentSchema = z.object({
  id: z.string(),
  link: z.string(),
  title: z.string(),
  type: z.enum(["document", "tweet", "youtube", "link"]),
//   tags: z.array(
//     z.object({
//       id: z.string(),
//       title: z.string(),
//     })
//   ),
  tags: z.array(z.string()),
  userId: z.string(),
});