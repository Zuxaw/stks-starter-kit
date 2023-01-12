import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/post/edit', async (req: Request, res: Response) => {
  const { username, profilePicture, _id } = req.body;
  console.log(getTime() + 'POST: Edit Post: ' + _id);

  const targetUser = await User.findOne({ _id });
  if (!targetUser) {
    console.log('User not found!');
    return res.status(404).send('User not found.');
  }

  let query = await User.findOneAndUpdate(
    { _id },
    {
      username,
      profilePicture,
    }
  );

  console.log(getTime() + 'POST: User was edited');
  res.status(200).send(query);
});

export { router as editUser };
