import axios from 'axios';
import React from 'react';
import styles from './auth.module.scss';

const Auth = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = '+88' + e.target.number.value;
    const { data } = await axios.post('/api/auth', { phone });
    console.log(data);
  };

  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.content}>
        <h1 className={styles.logo}>Speech</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <span>+88</span>
            <input
              type="text"
              placeholder="Enter your number"
              name="number"
              pattern="[0-9]+"
              title="Accept only number"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
