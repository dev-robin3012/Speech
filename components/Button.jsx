import React from 'react';
import styles from './button.module.scss';

const Button = ({ label, icon, loading, ...rest }) => (
  <button className={styles.button} {...rest}>
    {loading ? (
      <>
        <span>Wait...</span>
        <span className={styles.spinner}></span>
      </>
    ) : (
      <>
        <span>{label}</span> {icon}
      </>
    )}
  </button>
);

export default Button;
