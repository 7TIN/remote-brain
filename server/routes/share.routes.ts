import { Router } from "express";
import {
    createShareLink,
    // getShareContent,  
} from "../controllers/share.controller";

const shareRouter = Router();

shareRouter.post('/share',createShareLink);
// shareRouter.get('/:shareLink', getShareContent);

export default shareRouter;