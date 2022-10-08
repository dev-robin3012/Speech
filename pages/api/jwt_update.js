import checkTokenValidity from '../../helpers/checkTokenValidity';
import {
  accessTokenGenerate,
  refreshTokenGenerate,
} from '../../helpers/tokenGenerator';

const updateAccessToken = async (req, res) => {
  try {
    const { status, user } = await checkTokenValidity(
      req.headers['refreshtoken'],
      process.env.REFRESH_TOKEN_SECRET
    );

    delete user.iat;
    delete user.exp;

    const accessToken = await accessTokenGenerate(user);
    const refreshToken = await refreshTokenGenerate(user);

    return res.status(200).send({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
  }
};

export default updateAccessToken;
