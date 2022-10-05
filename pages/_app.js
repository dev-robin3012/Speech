import { Provider } from 'react-redux';
import Layout from '../layout';
import store from '../redux/store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default MyApp;
