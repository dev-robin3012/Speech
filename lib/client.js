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
    const { accessToken, refreshToken } = await store.getState().user;
    const accessTokenCheck = await checkTokenValidity(accessToken, 'secret');

    if (accessTokenCheck.status === 200) {
      config.headers.token = 'Bearer' + ' ' + accessToken;
      return config;
    }

    const refreshTokenCheck = await checkTokenValidity(
      refreshToken,
      'fbf8a6c2b878d5060a87a25f4fbe3b9b36f5c876'
    );

    if (refreshTokenCheck.status !== 200)
      return Promise.reject({
        status: 401,
        message: 'user auth token expired',
      });

    const { data } = await client.post(
      'jwt_update',
      {},
      {
        headers: { refreshToken },
      }
    );

    console.log(data);

    return Promise.reject({
      status: 401,
      message: 'user auth token expired',
    });
  },
  (error) => console.log('interceptor req error:', JSON.stringify(error))
);

export { client, protectedClient };
