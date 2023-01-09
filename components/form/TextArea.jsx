import React, { useRef, useState } from 'react';
import styles from './textarea.module.scss';

const TextArea = ({ name, placeholder, label, onChange, ...rest }) => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  return (
    <div className={`${styles.input_group} ${!isValid && styles.error}`}>
      <textarea
        ref={inputRef}
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          setIsValid(true);
          onChange(e);
        }}
        {...rest}
      />

      <label htmlFor={name} onClick={(e) => inputRef.current.focus()}>
        {label}
      </label>
    </div>
  );
};

export default TextArea;
