import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/users/clear', async (req: Request, res: Response) => {
  console.log(getTime() + 'GET: Delete all Post');
  const query = await User.deleteMany();
  console.log(getTime() + 'GET: All Post was deleted');
  res.status(200).send(query);
});

export { router as deleteAllUser };
