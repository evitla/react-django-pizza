import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import CartIcon from './CartIcon';

const Cart = ({ count, price, currency = '₽', link }: ICart) => (
  <div className="header__cart">
    <Link to="/cart">
      <Button className="button--cart">
        <span>
          {price} {currency}
        </span>
        <div className="button__delimiter"></div>
        <CartIcon />
        <span>{count}</span>
      </Button>
    </Link>
    {/* <a href={link} className="button button--cart">
      
    </a> */}
  </div>
);

export default Cart;

interface ICart {
  count: number;
  price: number;
  currency?: Currency;
  link: string;
}

type Currency = '₽' | '€' | '₸';
