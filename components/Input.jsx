import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './input.module.scss';

const Input = ({ label, name, placeholder, type, prefix, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className={styles.input_container}>
      <div className={styles.input_group}>
        {prefix && prefix}

        <input
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          name={name}
          onChange={(e) => setValue(e.target.value)}
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

      <label htmlFor={name} className={styles.label_in}>
        {label}
      </label>
    </div>
  );
};

export default Input;
