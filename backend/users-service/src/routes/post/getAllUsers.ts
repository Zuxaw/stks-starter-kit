import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/users', async (req: Request, res: Response) => {
  console.log(getTime() + 'GET: Get all users');

  let limit: number = 500;
  if (req.query.limit) {
    limit = +req.query.limit;
    console.log(limit);
    if (!limit) {
      return res.status(400).send('Bad request limit is not a number');
    }
  }

  const query = await User.find().limit(limit);

  if (!query) {
    console.log('No user found!');
    return res.status(400).send('No user found.');
  }

  console.log(getTime() + 'GET: User list returned');
  res.status(200).send(query);
});

export { router as getAllUsers };
