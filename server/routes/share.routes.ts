import { Router } from "express";
import { createShareContent, getShareContent } from "../controllers/share.controller";

const shareRouter = Router();

shareRouter.post('/share',createShareContent);
shareRouter.get('/:shareLink', getShareContent);

export default shareRouter;