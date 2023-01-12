import express, { Request, Response } from 'express';
import { Post } from '../../models/post';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/post/create', async (req: Request, res: Response) => {
  console.log(getTime() + 'POST: Post creation');
  const { content, images, userId } = req.body;

  if(!content || !userId){
    console.log(getTime() + 'Please specify the content and userId');
    return res.status(400).send('Please specify the content and userId');
  }

  const post = Post.build({
    content,
    images,
    likes: 0,
    shares: 0,
    comments: 0,
    userId,
    createdAt: new Date().toString(),
  });
  await post.save();

  console.log(getTime() + 'POST: Post is created');
  res.status(201).send(post);
});

export { router as createPost };