import { Router } from "express";
import { getShareContent } from "../controllers/share.controller";

const shareLinkRouter = Router();

shareLinkRouter.get('/:shareLink', getShareContent);

export default shareLinkRouter;