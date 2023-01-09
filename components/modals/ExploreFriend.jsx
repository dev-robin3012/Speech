import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import styles from './explore.module.scss';
import avatar from '/assets/avatar.webp';
import Button from '/components/Button';
import { protectedClient } from '/lib/client';

const ExploreFriend = ({ closeModal }) => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await protectedClient.get('/getUsers');
      setUserList(data);
    } catch (error) {
      console.log('user fetching error', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <div style={{ background: '#072B42', padding: '7px' }}>
          <Input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.users_container}>
        {userList.map((user) => (
          <div key={user._id} className={styles.user_card}>
            <div className={styles.info}>
              <div className={styles.avatar}>
                <Image src={user.avatar || avatar} alt="avatar" layout="fill" />
              </div>
              <div className={styles.meta}>
                <h3>{user.name}</h3>
                <p>{user?.headline || ' '}</p>
              </div>
            </div>
            <Button label="Add" />
          </div>
        ))}
      </div>

      <div className={styles.modal_footer}>
        <div style={{ background: '#072B42', padding: '7px' }}>
          <Button label="Cancel" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ExploreFriend;
