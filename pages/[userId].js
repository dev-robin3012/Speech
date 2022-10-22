import { useRouter } from 'next/router';
import React from 'react';
import conversations from '../assets/dummyConversations';
import users from '../assets/dummyUsers';
import InputMessage from '../components/InputMessage';
import SingleMessage from '../components/SingleMessage';
import TopBar from '../components/TopBar';

const Conversation = () => {
  const router = useRouter();
  const { userId } = router.query;

  const user = users.find((u) => u.id === userId);

  return (
    <>
      <TopBar user={user} />
      <div style={{ height: 'calc(100% - 100px)', overflowY: 'scroll' }}>
        {conversations.map((con, key) => (
          <SingleMessage key={key} message={con} />
        ))}
      </div>
      <InputMessage />
    </>
  );
};

export default Conversation;
