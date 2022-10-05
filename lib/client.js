import axios from 'axios';
import checkTokenValidity from '../helpers/checkTokenValidity';
import { store } from '../redux/store';

const client = axios.create({
  baseURL: '/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const protectedClient = axios.create({
  baseURL: '/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

protectedClient.interceptors.request.use(
  async (config) => {
    const { user } = await store.getState();

    if (!user)
      return Promise.reject({
        status: 401,
        message: 'user not exist in memory.',
      });

    const { accessToken, refreshToken } = user;

    const accessTokenCheck = await checkTokenValidity(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );

    if (accessTokenCheck.status === 200) {
      config.headers.token = 'Bearer' + ' ' + accessToken;
      return config;
    }

    const refreshTokenCheck = await checkTokenValidity(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    if (refreshTokenCheck.status !== 200)
      return Promise.reject({
        status: 401,
        message: 'user auth token expired',
      });

    const data = await client.post(
      'jwt_update',
      {},
      {
        headers: { refreshToken },
      }
    );

    console.log({ data });

    // return Promise.reject({
    //   status: 401,
    //   message: 'user auth token expired',
    // });
  },
  (error) => console.log('interceptor req error:', JSON.stringify(error))
);

export { client, protectedClient };
