import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/pizza-logo.svg';
import { pizzaCountSelector, priceSelector } from '../../store/pizzaSlice';

import Cart from './Cart';
import Logo from './Logo';
import Container from './Container';

const Header = () => {
  const totalPrice = useSelector(priceSelector);
  const totalCount = useSelector(pizzaCountSelector);

  return (
    <Container>
      <Link to="/">
        <Logo logo={logo} />
      </Link>
      <Route path="/">
        <Cart count={totalCount} price={totalPrice} link="/cart.html" />
      </Route>
    </Container>
  );
};

export default Header;
