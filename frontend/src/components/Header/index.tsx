import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from './Cart';

import logo from '../../assets/images/pizza-logo.svg';
import { pizzaCountSelector, priceSelector } from '../../store/pizzaSlice';

function Header() {
  const totalPrice = useSelector(priceSelector);
  const totalCount = useSelector(pizzaCountSelector);

  return (
    <Container>
      <Link to="/">
        <div className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Route exact path="/">
        <Cart count={totalCount} price={totalPrice} link="/cart.html" />
      </Route>
    </Container>
  );
}

export default Header;

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="header">
    <div className="container">{children}</div>
  </div>
);
