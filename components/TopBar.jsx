import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { TbAccessPointOff } from 'react-icons/tb';
import styles from './topbar.module.scss';

const TopBar = ({ user }) => {
  return (
    <div className={styles.topbar_container}>
      <Link href="/">
        <FaArrowLeft className={styles.backIcon} />
      </Link>

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
