import jwt from 'jsonwebtoken';
import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const handleSignIn = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ email: req.body.email });

    delete user._doc.password;

    const accessToken = jwt.sign(user._doc, 'secret', { expiresIn: '5m' });
    const refreshToken = jwt.sign(
      user._doc,
      'fbf8a6c2b878d5060a87a25f4fbe3b9b36f5c876',
      { expiresIn: '1h' }
    );

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
