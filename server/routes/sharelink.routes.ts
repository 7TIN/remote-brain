import { Router } from "express";
import { getSharedContent } from "../controllers/share.controller";

const shareLinkRouter = Router();

shareLinkRouter.get('/:shareLink', getSharedContent);

export default shareLinkRouter;