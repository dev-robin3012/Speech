import jwt from 'jsonwebtoken';

const accessTokenGenerate = (payload) => {
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
  });
  return 'Bearer' + ' ' + token;
};

const refreshTokenGenerate = (payload) => {
  const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });
  return 'Bearer' + ' ' + token;
};

export { accessTokenGenerate, refreshTokenGenerate };
