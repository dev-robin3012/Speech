import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const handleAuth = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ phone: req.body.phone });

    if (user) return res.status(200).send({ credentials: user });

    console.log(user);

    // const user = await User.create(req.body);
    return res
      .status(201)
      .send({ message: 'User Created Successfully.', credentials: user });
  } catch (error) {
    res.status(500).send('Server error');
    console.log('auth error:', error);
  }
};

export default handleAuth;
