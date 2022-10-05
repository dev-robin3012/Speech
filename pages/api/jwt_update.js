import checkTokenValidity from '../../helpers/checkTokenValidity';

const updateAccessToken = async (req, res) => {
  try {
    const res = await checkTokenValidity(
      req.headers['refreshtoken'],
      'fbf8a6c2b878d5060a87a25f4fbe3b9b36f5c876'
    );

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default updateAccessToken;
