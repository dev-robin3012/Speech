import { hash } from 'bcrypt';
import {
  accessTokenGenerate,
  refreshTokenGenerate,
} from '../../helpers/tokenGenerator';
import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const handleSignup = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) return res.status(409).send('This email is already registered.');

    const hashPass = await hash(req.body.password, 10);

    const saveUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPass,
    });

    delete saveUser._doc.password;

    const accessToken = await accessTokenGenerate(saveUser._doc);
    const refreshToken = await refreshTokenGenerate(saveUser._doc);

    return res.status(201).send({
      message: 'Sign Up Successful.',
      user: { ...saveUser._doc, accessToken, refreshToken },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Something wrong in server. Try again...');
  }
};

export default handleSignup;
