import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import landingImage from '../../assets/chat.gif';
import styles from './styles.module.scss';

const LandingPage = () => {
  const path = useRouter().pathname;

  return (
    path === '/' && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div>
            <h1>Get Start</h1>
            <p>With Sign Up or Sign In.</p>
          </div>
          <div className={styles.image}>
            <Image src={landingImage} alt="" layout="fill" />
          </div>
          <button className={styles.signUp}>Sign Up</button>
          <Link href="/signIn">
            <button className={styles.signIn}>Sign In</button>
          </Link>
        </div>
      </div>
    )
  );
};

export default LandingPage;
