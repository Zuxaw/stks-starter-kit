import express, { Request, Response } from 'express';
import { Post } from '../../models/post';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get(
    '/api/post/clear',
    async (req: Request, res: Response) => {
        const _id = req.query._id;
        if (!_id){
            return res.status(400).send("Please specify the id");
        }

        console.log(getTime()+'GET: Delete Post: '+ _id);
        const query = await Post.deleteOne({_id});

        console.log(getTime()+"GET: This post was deleted");
        res.status(200).send(query);
    }
)

export { router as deleteOnePost };