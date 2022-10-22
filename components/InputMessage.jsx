import React from 'react';
import { FiSend } from 'react-icons/fi';
import styles from './inputMessage.module.scss';

const InputMessage = () => {
  return (
    <div className={styles.input_wrapper}>
      <div>
        <textarea
          name="message"
          id="message"
          rows="1"
          placeholder="Type your speech here..."
        ></textarea>
        <button>
          Send <FiSend />{' '}
        </button>
      </div>
    </div>
  );
};

export default InputMessage;
