import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';
import { onClearCard, priceSelector, selectedPizzasSelector } from '../store/pizzaSlice';

import cartEmptyImage from '../assets/images/empty-cart.png';
import { CartIcon, Trash, GreyArrowLeft } from '../components/icons';

const Cart = () => {
  let selectedPizzas = useSelector(selectedPizzasSelector);
  const pizzasPrice = useSelector(priceSelector);
  const dispatch = useDispatch();

  const totalCount = selectedPizzas.reduce((a: number, b: any) => a + b.count, 0);

  return (
    <div className="container container--cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <CartIcon />
              Корзина
            </h2>
            <div className="cart__clear" onClick={() => dispatch(onClearCard())}>
              <Trash />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            {selectedPizzas.map((pizza: any) => (
              <CartItem
                id={pizza.id}
                name={pizza.name}
                types={pizza.types}
                imageUrl={pizza.imageUrl}
                sizes={pizza.sizes}
                price={pizza.price}
                count={pizza.count}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{pizzasPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to="/" className="button button--outline button--add go-back-btn">
                <GreyArrowLeft />
                <span>Вернуться назад</span>
              </Link>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <i>😕</i>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartEmptyImage} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
