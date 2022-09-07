import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './input.module.scss';

const Input = ({ label, name, placeholder, type, prefix, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.input_group}>
      {label && <label htmlFor={name}>{label}</label>}
      {prefix && prefix}

      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        name={name}
        {...rest}
      />

      {type === 'password' &&
        (!showPassword ? (
          <AiOutlineEye
            className={styles.showPassword}
            onClick={() => setShowPassword(true)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className={styles.hidePassword}
            onClick={() => setShowPassword(false)}
          />
        ))}
    </div>
  );
};

export default Input;
