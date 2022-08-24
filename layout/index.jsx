import React from 'react';

const Layout = ({ children }) => {
  return (
    <main>
      <h2>This is topBar</h2>
      <h2>This is sidebar</h2>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
