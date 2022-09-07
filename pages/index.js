import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import landingImage from '../assets/chat.gif';
import { user } from '../redux/reducers/user.reducer';
import styles from '../styles/landingPage.module.scss';

export default function LandingPage() {
  const loggedUser = useSelector(user);

  return (
    <div>
      <Head>
        <title>Speech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loggedUser ? (
        <h1>Hello World</h1>
      ) : (
        <div className={styles.landing_wrapper}>
          <div className={styles.content}>
            <div>
              <h1>Speech</h1>
              <p>Get Start With Sign Up or Sign In.</p>
            </div>
            <div className={styles.image}>
              <Image src={landingImage} alt="" layout="fill" />
            </div>
            <Link href="/signUp">
              <button className={styles.signUp}>Sign Up</button>
            </Link>
            <Link href="/signIn">
              <button className={styles.signIn}>Sign In</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
