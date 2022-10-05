import checkTokenValidity from '../../helpers/checkTokenValidity';

const sendVerificationCode = async (req, res) => {
  try {
    const status = await checkTokenValidity(req.headers.token);
    console.log({ status });
  } catch (error) {
    console.log({ verifyErr: error });
  }
};

export default sendVerificationCode;
