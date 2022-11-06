import React from 'react';
import styles from './xLine.module.scss';

const XLine = ({ text }) => {
  return (
    <div className={styles.hr_line}>
      <span>{text}</span>
    </div>
  );
};

export default XLine;
