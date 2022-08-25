import gsap from 'gsap-trial';
import React, { useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiChatSmile2Line } from 'react-icons/ri';
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <li key={i} className="animate__animated animate__zoomIn">
            <FaUserCircle />
            <div>
              <h3>
                Shahadat Robin <time>2min ago</time>
              </h3>
              <p className={i % 2 === 0 && styles.unread}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quaerat
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
