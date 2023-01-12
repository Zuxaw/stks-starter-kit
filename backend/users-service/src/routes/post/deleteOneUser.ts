import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/user/clear', async (req: Request, res: Response) => {
  const _id = req.query._id;
  if (!_id) {
    return res.status(400).send('Please specify the id');
  }

  console.log(getTime() + 'GET: Delete user: ' + _id);
  const query = await User.deleteOne({ _id });

  console.log(getTime() + 'GET: This user was deleted');
  res.status(200).send(query);
});

export { router as deleteOneUser };
