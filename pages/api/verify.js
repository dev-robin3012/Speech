import checkTokenValidity from '../../helpers/checkTokenValidity';

const sendVerificationCode = async (req, res) => {
  try {
    const status = await checkTokenValidity(
      req.headers['authorization'],
      process.env.ACCESS_TOKEN_SECRET
    );
    console.log(status);
  } catch (error) {
    console.log({ verifyErr: error });
  }
};

export default sendVerificationCode;
