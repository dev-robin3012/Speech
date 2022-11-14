import React from 'react';
import styles from './button.module.scss';

const Button = ({
  label,
  icon,
  loading,
  loadingLabel = 'Wait...',
  iconPlacement = 'right',
  bg,
  color,
  ...rest
}) => (
  <button className={styles.button} {...rest} style={{ background: bg, color }}>
    {loading ? (
      <>
        <span>{loadingLabel}</span>
        <span className={styles.spinner}></span>
      </>
    ) : (
      <>
        {iconPlacement === 'left' && icon} <span>{label}</span>{' '}
        {iconPlacement === 'right' && icon}
      </>
    )}
  </button>
);

export default Button;
