import { compare } from 'bcrypt';
import {
  accessTokenGenerate,
  refreshTokenGenerate,
} from '../../helpers/tokenGenerator';
import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const handleSignIn = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send('There is no account for this email.');
    }

    const match = await compare(req.body.password, user.password);

    if (!match) {
      return res.status(401).send("Password doesn't match.");
    }

    delete user._doc.password;
    delete user._doc.verifyToken;

    const accessToken = await accessTokenGenerate(user._doc);
    const refreshToken = await refreshTokenGenerate(user._doc);

    return res.status(201).send({
      message: 'Sign In Successful.',
      user: { ...user._doc, accessToken, refreshToken },
    });
  } catch (error) {
    res.status(500).send('Something wrong in server. Try again...');
    console.log(error);
  }
};

export default handleSignIn;
