import React from 'react';
import styles from './button.module.scss';

const Button = ({ label, icon, ...rest }) => (
  <button className={styles.button} {...rest}>
    <span>{label}</span> {icon}
  </button>
);

export default Button;
