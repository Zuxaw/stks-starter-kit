import express, { Request, Response } from 'express';
import { Post } from '../../models/post';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get(
    '/api/post',
    async (req: Request, res: Response) => {
        const _id = req.query._id;
        if (!_id) {
            return res.status(400).send("Please specify the id");
        }

        console.log(getTime()+'GET: Get Post by id'+ _id);

        const query = await Post.findOne({ _id });

        if (!query) {
            console.log("Post not found!");
            return res.status(404).send("Post not found.");
        }

        console.log(getTime()+'POST: Post by id is returned');
        res.status(200).send(query);
    }
)

export { router as getPostById };