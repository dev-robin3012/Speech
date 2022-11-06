import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatContext } from '../pages/_app';
import { user } from '../redux/reducers/user.reducer';
import AuthLayout from './AuthLayout';
import styles from './layout.module.scss';
import Sidebar from './SideBar';

const Layout = ({ children }) => {
  const loggedUser = useSelector(user);
  const { chatOn } = useContext(ChatContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  return loggedUser?.isVerified ? (
    <main className={styles.container}>
      <div
        className={`${styles.sidebar} ${
          chatOn && windowWidth <= 600 ? 'hidden' : ''
        }`}
      >
        <Sidebar />
      </div>

      <div
        className={`${styles.conversation} ${
          !chatOn && windowWidth <= 600 ? 'hidden' : ''
        }`}
      >
        {children}
      </div>
    </main>
  ) : (
    <AuthLayout>{children}</AuthLayout>
  );
};

export default Layout;
