import React from 'react';
import { useDispatch } from 'react-redux';
import { onDecrement, onDelete, onIncrement } from '../store/pizzaSlice';
import { Plus } from './icons';

const CartItem = ({ id, name, types, sizes, imageUrl, price, count }: any) => {
  const dispatch = useDispatch();

  const handleDecrement = () => count > 1 && dispatch(onDecrement({ id, types, sizes }));

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {types} тесто, {sizes} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          className="button button--outline button--circle cart__item-count-minus"
          onClick={handleDecrement}>
          <Plus />
        </div>
        <b>{count}</b>
        <div
          className="button button--outline button--circle cart__item-count-plus"
          onClick={() => dispatch(onIncrement({ id, types, sizes }))}>
          <Plus />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div
          className="button button--outline button--circle"
          onClick={() => dispatch(onDelete({ id, types, sizes }))}>
          <Plus />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
