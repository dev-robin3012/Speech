import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { RiChatSmile2Line } from 'react-icons/ri';
import { TbAccessPoint } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../assets/avatar.webp';
import users from '../assets/dummyUsers';
import Button from '../components/Button';
import ExploreFriend from '../components/modals/ExploreFriend';
import useModal from '../hooks/useModal';
import { ChatContext } from '../pages/_app';
import { user, userLogout } from '../redux/reducers/user.reducer';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const { Modal, setShowModal, closeModal } = useModal();
  const { _id } = useSelector(user);
  const { setChatOn } = useContext(ChatContext);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   gsap.to('#logo', {
  //     scale: 1.3,
  //     opacity: 0,
  //     duration: 2,
  //     repeat: Infinity,
  //   });
  // }, []);

  return (
    <div className={`${styles.sidebar_container}`}>
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
        </div>
        <input type="text" placeholder="Search" />
      </div>

      <ul className={styles.sidebar_items}>
        {users.map((user, i) => (
          <li
            key={i}
            className="animate__animated animate__zoomIn"
            onClick={() => setChatOn(user.id)}
          >
            <FaUserCircle />
            <div>
              <h3>
                <span>
                  {user.name} <TbAccessPoint className="online" />
                </span>
                <time>2min ago</time>
              </h3>
              <p className={i % 2 === 0 ? styles.unread : ''}>{user.message}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <Button
          label="Logout"
          icon={<BiLogOutCircle />}
          iconPlacement="left"
          bg="lightcoral"
          onClick={() => dispatch(userLogout())}
        />
        <Modal
          trigger={
            <Button
              onClick={setShowModal}
              label="Add Friend"
              icon={<AiOutlineUsergroupAdd />}
            />
          }
        >
          <ExploreFriend closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
