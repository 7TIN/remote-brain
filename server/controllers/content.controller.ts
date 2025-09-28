

// todo 1. add content 2. delete content by id 3. get all contents 4. get content by id 

import type { NextFunction, Request, Response } from "express";
import Content from "../models/content.model";
import { resolveSync } from "bun";


export const addContent = async(req : Request, res : Response, next: NextFunction ) => {

    try {
        const contentData = new Content(req.body);
        // if (!contentData) {
        //     console.log("invalid schema");
        //     return;
        // }
        const saveContent = await contentData.save();
        res.status(201).send("Content Added Successfully").json(saveContent);
    }catch(error) {
        next(error);
    }
}


export const getContents = async(req : Request, res : Response, next: NextFunction ) => {
    try {
        const contentData = await Content.find();
        res.status(200).json({
            Contents : contentData
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
