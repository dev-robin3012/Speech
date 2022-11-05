import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import '../styles/globals.scss';

export const ChatContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [chatOn, setChatOn] = useState('');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChatContext.Provider value={{ chatOn, setChatOn }}>
          <Component {...pageProps} />
          <ToastContainer />
        </ChatContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
