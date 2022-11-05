import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import {
  BsArrowLeftCircle,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import avatar from '../assets/avatar.webp';
import XLine from '../components/XLine';
import { user } from '../redux/reducers/user.reducer';
import styles from '../styles/profilePage.module.scss';

const Profile = () => {
  const { _id } = useSelector(user);
  const router = useRouter();
  const { query, back } = router;

  // console.log(query.user === _id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.header}>
          <BsArrowLeftCircle onClick={() => back()} />
          <BiEdit />
        </div>

        <div className={styles.avatar}>
          <Image src={avatar} alt="avatar" layout="fill" />
        </div>

        <div className={styles.identity}>
          <div>
            <h1>Shahadat Robin</h1>
            <p>@sp-101</p>
          </div>
          <h3>In publishing and graphic design, Lorem ipsum </h3>
        </div>

        <XLine text="Bio" />

        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document
        </p>

        <div className={styles.socialLinks}>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
      <div className={styles.rightSide}>
        <h2>More About Shahadat</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          <br />
          <br />
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
          pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
          excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
          temporibus sint culpa, recusandae aliquam numquam totam ratione
          voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
          aliquam eligendi, placeat qui corporis!
        </p>
      </div>
    </div>
  );
};

export default Profile;
