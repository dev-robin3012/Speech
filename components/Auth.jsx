import React from 'react';
import styles from './auth.module.scss';

const Auth = () => {
  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.content}>
        <h1 className={styles.logo}>Speech</h1>
        <form>
          <h2>Sign In</h2>
        </form>
      </div>
    </div>
  );
};

export default Auth;
