import type { NextFunction, Request, Response } from "express";
import Link from "../models/link.model";
import { randomGenerate } from "../libs/utils";
import Content from "../models/content.model";
import User from "../models/user.model";

interface ShareBody {
  share?: boolean;
}

export const createShareContent = async (
  req: Request<object, object, ShareBody> & { userId: string },
  res: Response,
  next: NextFunction
) => {
  try {
    const share = req.body.share;

    if (!share) {
      res.status(411).send("share is false");
      // await Link.deleteOne({
      //     userId : req.userId,
      // })
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
      hash: randomGenerate(10),
    });

    res.json({ message: "Updated sharable Link", link: link });
  } catch (e) {
    next(e);
  }
};

export const getShareContent = async (
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

    const user = await User.findOne({ userId: link.userId });

    res.json({
      username: user?.username,
      content: content,
    });
  } catch (error) {
    next(error);
  }
};
