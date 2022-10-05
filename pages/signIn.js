/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { MdPassword } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import AuthLayout from '../layout/AuthLayout';
import { client } from '../lib/client';
import { setUserLogIn } from '../redux/reducers/user.reducer';
import styles from '../styles/auth.module.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const validation = {
    email: /^[A-Za-z0-9_.+-]+@[a-zA-Z]+\.[a-z]+/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await client.post('signIn', formData);
      dispatch(setUserLogIn(data.user));
      setLoading(false);
      !data.user.isVerified && router.push('/verify?user=' + data.user._id);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>Speech || Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles.auth_form} onSubmit={handleLogin}>
        <div>
          <h1>Login</h1>
          <p>You and your friends always connected.</p>
        </div>

        <Input
          placeholder="something@mail.com"
          type="email"
          label="Email"
          name="email"
          prefix={<FiUser />}
          onChange={handleChange}
          validation={{
            pattern: validation.email,
            message: 'Try with valid email format.',
          }}
        />

        <Input
          placeholder="Enter Your Password"
          name="password"
          label="Password"
          type="password"
          prefix={<MdPassword />}
          onChange={handleChange}
          validation={{
            pattern: validation.password,
            message: 'Min length 6 with capital and small letter.',
          }}
        />

        <Button
          label="Sign In"
          loading={loading}
          disabled={
            !formData.email ||
            !validation.email.test(formData.email) ||
            !formData.password ||
            !validation.password.test(formData.password) ||
            loading
          }
          type="submit"
          icon={<BiLogIn />}
        />

        <p>
          Don't have account ? <Link href="/signUp">Register</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
