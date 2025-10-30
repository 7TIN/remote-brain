import type { NextFunction, Request, Response } from "express";
import Link from "../models/link.model";
import Content from "../models/content.model";
import User from "../models/user.model";
import { generateShareHash } from "../libs/utils";

interface ShareBody {
  share?: boolean;
}

export const createShareLink = async (
  req: Request<object, object, ShareBody> & { userId: string },
  res: Response,
  next: NextFunction
) => {
  try {
    const share = req.body.share;

    if (!share) {
      await Link.deleteOne({
          userId : req.userId,
      })
      res.json({message : "Link Removed"});
      
    }
    const shareLink = await Link.findOne({
      userId: req.userId,
    });

    if (shareLink) {
      res.status(200).json({ message: "already exists", link: shareLink });
      return;
    }

    const link = await Link.create({
      userId: req.userId,
      hash: generateShareHash(32),
    });

    res.json({ message: "Updated sharable Link", link: link });
  } catch (e) {
    next(e);
  }
};

export const getSharedContent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hash = req.params.shareLink;

    const link = await Link.findOne({ hash });
    if (!link) {
      res.status(401).send("Link not found");
      return;
    }

    const content = await Content.find({ userId: link.userId });

    const user = await User.findOne({ _id: link.userId });

    if(!user){
      res.send("user not found");
      return;
    }

    res.json({
      username: user.username,
      content: content,
    });
  } catch (error) {
    next(error);
  }
};
