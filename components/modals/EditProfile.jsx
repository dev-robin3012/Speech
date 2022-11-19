import React from 'react';
import formRegex from '../../utils/regex';
import Button from '../Button';
import Input from '../Input';
import styles from './editProfile.module.scss';

const EditProfile = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4>Update Profile</h4>
      </header>
      <form action="">
        <Input
          label="Name"
          name="name"
          placeholder="Name"
          variant="form"
          onChange={(val) => console.log(val)}
          defaultValue="Shahadat Robin"
          validation={{
            pattern: formRegex.name,
            message: 'Name should be capitalize.',
          }}
        />
        <Input
          label="UserName"
          name="userName"
          placeholder="UserName"
          defaultValue="@Robin-273"
          variant="form"
          onChange={(val) => console.log(val)}
        />
        <Input
          label="Headline"
          name="headline"
          placeholder="Headline"
          defaultValue="In publishing and graphic design, Lorem ipsum"
          variant="form"
          onChange={(val) => console.log(val)}
        />
      </form>
      <footer className={styles.footer}>
        <div>
          <Button label="Update" />
        </div>
      </footer>
    </div>
  );
};

export default EditProfile;
