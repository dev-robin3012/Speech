import React, { useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './input.module.scss';

const Input = ({
  label,
  name,
  placeholder,
  type,
  prefix,
  onChange,
  validation,
  ...rest
}) => {
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const checkValidation = (e) => setIsValid(validation.test(e.target.value));

  return (
    <div className={`${styles.input_group} ${!isValid && styles.error}`}>
      {prefix && prefix}

      <input
        ref={inputRef}
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          setIsValid(true);
          onChange(e);
        }}
        onBlur={(e) => validation && checkValidation(e)}
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

      <label htmlFor={name} onClick={(e) => inputRef.current.focus()}>
        {label}
      </label>
    </div>
  );
};

export default Input;
