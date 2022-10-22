import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <>
        <Component {...pageProps} />
        <ToastContainer />
      </>
    </PersistGate>
  </Provider>
);

export default MyApp;
