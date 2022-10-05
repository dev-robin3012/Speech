import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../layout';
import { persistor, store } from '../redux/store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  </Provider>
);

export default MyApp;
