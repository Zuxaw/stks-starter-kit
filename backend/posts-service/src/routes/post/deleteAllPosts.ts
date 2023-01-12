import express, { Request, Response } from 'express';
import { Post } from '../../models/post';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/post/clear', async (req: Request, res: Response) => {
  console.log(getTime() + 'GET: Delete all Post');
  const query = await Post.deleteMany();
  console.log(getTime() + 'GET: All Post was deleted');
  res.status(200).send(query);
});

export { router as deleteAllPost };
