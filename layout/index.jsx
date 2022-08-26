import { useRouter } from 'next/router';
import React from 'react';
import styles from './layout.module.scss';
import Sidebar from './SideBar';

const Layout = ({ children }) => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <main className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.conversation}>{children}</div>
    </main>
  );
};

export default Layout;
