
import type { NextFunction, Request, Response } from "express";
import Content from "../models/content.model";
import { z } from "zod";

const contentTypes = ["document", "tweet", "youtube", "link"] as const;

export const zodContentSchema = z.object({
  link: z.string().min(1, "Link is required"),
  title: z.string().min(1, "Title is required"),
  userId: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId"), // MongoDB ObjectId format
  type: z.enum(contentTypes),
  tags: z.array(z.string()).optional()
});

interface AuthenticatedRequest extends Request {
  userId: string;
}

// export type ContentInput = z.infer<typeof zodContentSchema>;

export const addContent = async(req : AuthenticatedRequest, res : Response, next: NextFunction ) => {

    try {

        const validated = zodContentSchema.omit({ userId: true }).parse(req.body);
        // const contentData = new Content(req.body);
        // if (!contentData) {
        //     console.log("invalid schema");
        //     return;
        // }
        const content = new Content({
            ...validated,
            userId : req.userId
        })
        const saveContent = await content.save();
        res.status(201).json({message : "Content Added Successfully", content : saveContent});
    }catch(error) {
        next(error);
    }
}

export const getContents = async(req : Request, res : Response, next: NextFunction ) => {
    try {
        const contentData = await Content.find({userId : req.userId});
        res.status(200).json({
            message : "Contents fetched successfully",
            contents : contentData
        })
    }catch(error){
        next(error);
    }
}

export const getContentsById = async (req : Request, res : Response, next: NextFunction ) => {
    try {
        const foundContent = await Content.findById(req.params.id);
        res.status(200).json({
            Content: foundContent,
        })
    }catch (error){
        next(error)
    }
}

export const updateContent = async(req : Request, res : Response, next: NextFunction ) => {
    try {
        const data = zodContentSchema.parse(req.body); 
        const updateData = await Content.findByIdAndUpdate(req.params.id, data, {new: true})

        if(!updateData){
            res.status(404).json({message: "Content not found to update"})
        }

        res.status(200).json({
            Content : updateData,
        })
    }catch (error) {
        next(error)
    }
}

export const deleteContent = async(req : Request, res : Response, next: NextFunction ) => {
    try {
        const deleteFoundContent = await Content.findByIdAndDelete(req.params.id);

        if(!deleteFoundContent){
            res.status(404).json({message : "Content not fount to delete"})
        }
        res.status(300).send("Deleted Successfully");

    }catch (error){
        next(error)
    }
}