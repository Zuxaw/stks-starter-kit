import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/user', async (req: Request, res: Response) => {
  const _id = req.query._id;
  if (!_id) {
    return res.status(400).send('Please specify the id');
  }

  console.log(getTime() + 'GET: Get User by id' + _id);

  const query = await User.findOne({ _id });

  if (!query) {
    console.log('User not found!');
    return res.status(404).send('User not found.');
  }

  console.log(getTime() + 'POST: User by id is returned');
  res.status(200).send(query);
});

export { router as getUserById };
