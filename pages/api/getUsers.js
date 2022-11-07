import checkTokenValidity from '../../helpers/checkTokenValidity';
import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const getUsers = async (req, res) => {
  await dbConnection();

  try {
    const { status, message, user } = await checkTokenValidity(
      req.headers['authorization'],
      process.env.ACCESS_TOKEN_SECRET
    );

    if (status !== 200) throw { status, message };

    const users = await User.find({
      _id: { $nin: user._id },
      isVerified: true,
    })
      .select('-password')
      .select('-isVerified');

    res.status(200).send({ users });
  } catch ({ status, message }) {
    console.log({ status, message });
    return res.status(status).send(message);
  }
};

export default getUsers;
