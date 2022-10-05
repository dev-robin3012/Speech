import axios from 'axios';
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
  (config) => {
    const { accessToken } = store.getState().user;
    config.headers.token = 'Bearer' + ' ' + accessToken;
    return config;
  },
  (error) => console.log('interceptor req error:', error)
);

export { client, protectedClient };
