import { useRouter } from 'next/router';
import React from 'react';
import styles from './layout.module.scss';
import Sidebar from './SideBar';

const Layout = ({ children }) => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <main className={styles.container}>
      <div
        className={`${styles.sidebar} ${userId && styles.sidebar_small_style}`}
      >
        <Sidebar />
      </div>

      <div
        className={`${styles.conversation} ${
          userId && styles.conversation_small_style
        }`}
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
