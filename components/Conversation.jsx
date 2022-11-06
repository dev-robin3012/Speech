import React, { useContext } from 'react';
import conversations from '../assets/dummyConversations';
import users from '../assets/dummyUsers';
import { ChatContext } from '../pages/_app';
import InputMessage from './InputMessage';
import SingleMessage from './SingleMessage';
import TopBar from './TopBar';

const Conversation = () => {
  const { chatOn } = useContext(ChatContext);

  const user = users.find((u) => u.id === chatOn);

  return (
    <section
      className="animate__animated animate__fadeInRight"
      style={{ height: '100%' }}
    >
      <TopBar user={user} />
      <div
        style={{
          height: 'calc(100% - 120px)',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {conversations.map((con, key) => (
          <SingleMessage key={key} message={con} />
        ))}
      </div>
      <InputMessage />
    </section>
  );
};

export default Conversation;
