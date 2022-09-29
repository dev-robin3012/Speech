import React from 'react';
import styles from './authLayout.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.topbar}>
        <Link href="/">
          <h1>Speech</h1>
        </Link>
      </div> */}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AuthLayout;
