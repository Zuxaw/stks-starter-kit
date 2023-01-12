import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/user/create', async (req: Request, res: Response) => {
  console.log(getTime() + 'POST: User creation');
  const { username, profilePicture, email } = req.body;

  if(!email){
    console.log(getTime() + 'Please specify the email');
    return res.status(400).send('Please specify the email');
  }

  const user = User.build({
    username,
    profilePicture,
    email,
    createdAt: new Date().toString(),
  });
  await user.save();

  console.log(getTime() + 'POST: User is created');
  res.status(201).send(user);
});

export { router as createUser };