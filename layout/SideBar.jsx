import gsap from 'gsap-trial';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { RiChatSmile2Line } from 'react-icons/ri';
import { TbAccessPoint } from 'react-icons/tb';
import users from '../assets/dummyUsers';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  useEffect(() => {
    gsap.to('#logo', {
      scale: 1.3,
      opacity: 0,
      duration: 2,
      repeat: Infinity,
    });
  }, []);

  return (
    <div className={styles.sidebar_container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.logo}>
            <RiChatSmile2Line id="logo" /> <span>Speech</span>
          </h1>
          <FaUserCircle />
        </div>
        <input type="text" placeholder="Search" />
      </div>

      <ul className={styles.sidebar_items}>
        {users.map((user, i) => (
          <Link href={user.id} key={user.id}>
            <li className="animate__animated animate__zoomIn">
              <FaUserCircle />
              <div>
                <h3>
                  <span>
                    {user.name} <TbAccessPoint className="online" />
                  </span>
                  <time>2min ago</time>
                </h3>
                <p className={i % 2 === 0 ? styles.unread : ''}>
                  {user.message}
                </p>
              </div>
            </li>
          </Link>
        ))}
        {users.map((user, i) => (
          <Link href={user.id} key={user.id}>
            <li className="animate__animated animate__zoomIn">
              <FaUserCircle />
              <div>
                <h3>
                  <span>
                    {user.name} <TbAccessPoint className="online" />
                  </span>
                  <time>2min ago</time>
                </h3>
                <p className={i % 2 === 0 ? styles.unread : ''}>
                  {user.message}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className={styles.add_friend}>
        <button>
          <AiOutlineUsergroupAdd /> Add Friend
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
