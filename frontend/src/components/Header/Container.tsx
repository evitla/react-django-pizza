import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="header">
    <div className="container">{children}</div>
  </div>
);

export default Container;
