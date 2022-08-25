import React from 'react';
import styles from './layout.module.scss';
import Sidebar from './SideBar';

const Layout = ({ children }) => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.conversation}>{children}</div>
    </main>
  );
};

export default Layout;
