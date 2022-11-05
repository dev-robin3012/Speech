import gsap from 'gsap-trial';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { RiChatSmile2Line } from 'react-icons/ri';
import { TbAccessPoint } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import avatar from '../assets/avatar.webp';
import users from '../assets/dummyUsers';
import { user } from '../redux/reducers/user.reducer';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const { _id } = useSelector(user);

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
          <div className={styles.avatar}>
            <Link href={`profile?user=${_id}`}>
              <Image src={avatar} alt="avatar" layout="fill" />
            </Link>
          </div>
          {/* <FaUserCircle /> */}
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
