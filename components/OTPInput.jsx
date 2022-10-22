import { useEffect, useRef, useState } from 'react';

import styles from './otpInput.module.scss';

const OTPInput = ({ digit, onChange, defaultValue }) => {
  const [inputValues, setInputValues] = useState('');
  const inputEL = useRef(null);

  let indexing = [];

  for (let i = 1; i <= digit; i++) {
    indexing.push(i);
  }

  const handleFocus = (e) => {
    inputEL.current.focus();
  };

  const handleChange = (e) => {
    if (e.key !== ' ' && !isNaN(Number(e.key))) {
      if (inputValues.length < digit) {
        // setInputValues(inputValues + e.key);
        onChange(inputValues + e.key);
      }

      if (inputValues.length < digit - 1) {
        e.target.value = '';
        return e;
      }
    } else if (e.key === 'Backspace') {
      const sliced = inputValues.slice(0, inputValues.length - 1);
      // setInputValues(sliced);
      onChange(sliced);
    } else {
      e.target.value = '';
      return e;
    }
  };

  useEffect(() => {
    if (!defaultValue) inputEL.current.value = '';
    setInputValues(defaultValue);
  }, [defaultValue]);

  return (
    <div className={styles.input_wrapper} style={{ width: `${digit * 40}px` }}>
      {indexing.map((i) => (
        <div key={i} className={styles.single_box} onClick={handleFocus}>
          <h2 style={{ color: !inputValues[i - 1] && 'gray' }}>
            {inputValues[i - 1] || 0}
          </h2>
        </div>
      ))}

      <input
        maxLength={1}
        onKeyUp={handleChange}
        type="text"
        placeholder="0"
        autoFocus
        style={{
          left: `${
            inputValues.length < digit ? inputValues.length * 40 : ''
          }px`,
        }}
        ref={inputEL}
      />
    </div>
  );
};

export default OTPInput;
