import jwt from 'jsonwebtoken';

const checkTokenValidity = async (payload) => {
  try {
    const token = payload.split(' ')[1];
    const decoded = await jwt.verify(token, 'secret');
    return { status: 200, user: decoded };
  } catch (error) {
    return { status: 401, message: error.message };
  }
};

export default checkTokenValidity;
