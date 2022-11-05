import React, { useContext } from 'react';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { TbAccessPointOff } from 'react-icons/tb';
import { ChatContext } from '../pages/_app';
import styles from './topbar.module.scss';

const TopBar = ({ user }) => {
  const { setChatOn } = useContext(ChatContext);

  return (
    <div className={styles.topbar_container}>
      <FaArrowLeft className={styles.backIcon} onClick={() => setChatOn()} />

      <div className={styles.identity}>
        <FaUserCircle className={styles.avatar} />
        <div>
          <h3>
            {user?.name} <TbAccessPointOff />
          </h3>
          <small>{user?.id}</small>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
