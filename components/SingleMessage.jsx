import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './singleMessage.module.scss';

const SingleMessage = ({ message }) => {
  return (
    <div
      className={
        message.id % 2 === 0
          ? `animate__animated  animate__lightSpeedInRight ${styles.sent_message}`
          : `animate__animated animate__lightSpeedInLeft ${styles.received_message}`
      }
    >
      <FaUserCircle className={styles.avatar} />
      <div>
        <p>{message.message}</p>
        <small>02:30pm</small>
      </div>
    </div>
  );
};

export default SingleMessage;
