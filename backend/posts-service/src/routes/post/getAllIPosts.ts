import express, { Request, Response } from 'express';
import { Post } from '../../models/post';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get(
    '/api/posts',
    async (req: Request, res: Response) => {
        console.log(getTime()+'GET: Get all pots');

        let limit: number = 500;
        if (req.query.limit) {
            limit = +req.query.limit;
            console.log(limit);
            if (!limit) {
                return res.status(400).send("Bad request limit is not a number");
            }
        }

        const query = await Post.find().limit(limit);

        if (!query) {
            console.log("No post found!");
            return res.status(400).send("No post found.");
        }

        console.log(getTime()+"GET: Post list returned");
        res.status(200).send(query);
    }
)

export { router as getAllPosts };