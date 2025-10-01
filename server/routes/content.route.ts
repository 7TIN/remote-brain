import { Router } from 'express';
import { addContent, deleteContent, getContents, getContentsById, updateContent } from '../controllers/content.controller';

const contentRouter = Router();

contentRouter.post('/',addContent);
contentRouter.get('/',getContents);
contentRouter.get('/:id',getContentsById);
contentRouter.put('/:id',updateContent);
contentRouter.delete('/:id',deleteContent);

export default contentRouter;