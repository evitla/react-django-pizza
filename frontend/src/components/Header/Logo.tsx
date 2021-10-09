import React from 'react';

const Logo = ({ logo }: { logo: string }) => (
  <div className="header__logo">
    <img width="38" src={logo} alt="Pizza logo" />
    <div>
      <h1>React Pizza</h1>
      <p>самая вкусная пицца во вселенной</p>
    </div>
  </div>
);

export default Logo;
