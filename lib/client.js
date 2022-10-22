import axios from 'axios';
import { toast } from 'react-toastify';
import checkTokenValidity from '../helpers/checkTokenValidity';
import { setUserLogIn, userLogout } from '../redux/reducers/user.reducer';
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

protectedClient.interceptors.request.use(async (config) => {
  const { user } = await store.getState();

  try {
    if (!user) throw { status: 401, message: 'User not exist in memory.' };

    const { accessToken, refreshToken } = user;

    const accessTokenCheck = await checkTokenValidity(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );

    if (accessTokenCheck.status === 200) {
      config.headers.Authorization = accessToken;
      return config;
    }

    const refreshTokenCheck = await checkTokenValidity(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    if (refreshTokenCheck.status !== 200) {
      throw {
        status: refreshTokenCheck.status,
        message: refreshTokenCheck.message,
      };
    }

    const { data } = await client.post(
      'jwt_update',
      {},
      {
        headers: { refreshToken },
      }
    );

    await store.dispatch(setUserLogIn({ ...user, ...data }));
    config.headers.Authorization = data.accessToken;
    return config;
  } catch (error) {
    toast.error(error.message);
    store.dispatch(userLogout());
    console.log('interceptor req error:', error);
  }
});

export { client, protectedClient };
