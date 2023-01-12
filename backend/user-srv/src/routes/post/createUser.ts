import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/user/create', async (req: Request, res: Response) => {
  console.log(getTime() + 'POST: User creation');
  const { username, uid, profilePicture, email } = req.body;

  if (!email || !uid) {
    console.log(getTime() + 'Please specify the email or the uid');
    return res.status(400).send('Please specify the email or the uid');
  }

  //check if user already exists
  console.log(email);
  let user = await User.findOneAndUpdate(
    { email },
    {
      username,
      uid,
      profilePicture,
      email,
      createdAt: new Date().toString(),
    },
    {
      upsert: true,
      new: true,
    }
  );

  if (!user) {
    const userCreated = User.build({
      username,
      uid,
      profilePicture,
      email,
      createdAt: new Date().toString(),
    });
    await userCreated.save();
    console.log(getTime() + 'POST: User is created');
    res.status(201).send(userCreated);
  }

  console.log(getTime() + 'POST: User is created');
  res.status(201).send(user);
});

export { router as createUser };