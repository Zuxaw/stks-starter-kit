import express, { Request, Response } from 'express';
import { Post } from '../../models/post';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/post/edit', async (req: Request, res: Response) => {
  const { content, images, _id, likes, comments, shares } = req.body;
  console.log(getTime() + 'POST: Edit Post: ' + _id);

  const targetPost = await Post.findOne({ _id });
  if (!targetPost) {
    console.log('Post not found!');
    return res.status(404).send('Post not found.');
  }

  let query = await Post.findOneAndUpdate(
    { _id },
    {
      content,
      images,
      likes,
      comments,
      shares
    },
  );

  console.log(getTime() + 'POST: Post was edited');
  res.status(200).send(query);
});

export { router as editPost };
