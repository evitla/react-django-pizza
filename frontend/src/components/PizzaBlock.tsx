import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import IPizzaProps from '../types/PizzaProps';
import { onPizzaSelect, countClickSelector } from '../store/pizzaSlice';

const PizzaBlock = ({ name, imageUrl, price, types, sizes, id }: IPizzaProps) => {
  const dispatch = useDispatch();
  const timesClicked = useSelector(countClickSelector(id));

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index: number) => setActiveType(index);
  const onSelectSize = (index: number) => setActiveSize(index);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />

      <h4 className="pizza-block__title">{name}</h4>

      <Details
        types={types}
        sizes={sizes}
        activeType={activeType}
        activeSize={activeSize}
        onSelectType={onSelectType}
        onSelectSize={onSelectSize}
      />

      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <AddButton
          onAdd={() =>
            dispatch(
              onPizzaSelect({
                id,
                name,
                imageUrl,
                price,
                type: activeType,
                size: activeSize,
              }),
            )
          }
          count={timesClicked}
        />
      </div>
    </div>
  );
};

export default PizzaBlock;

const Details = ({ types, sizes, activeType, activeSize, onSelectType, onSelectSize }: any) => {
  const pizzaTypes = ['тонкое', 'традиционное'];
  const pizzaSizes = [26, 30, 40];

  return (
    <div className="pizza-block__selector">
      <ul>
        {pizzaTypes.map((type, index) => (
          <li
            key={type}
            className={classNames({
              active: activeType === index,
              disabled: !types.includes(index),
            })}
            onClick={() => onSelectType(index)}>
            {type}
          </li>
        ))}
      </ul>
      <ul>
        {pizzaSizes.map((size, index) => (
          <li
            key={size}
            className={classNames({
              active: activeSize === index,
              disabled: !sizes.includes(size),
            })}
            onClick={() => onSelectSize(index)}>
            {size} см.
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddButton = ({ onAdd, count }: any) => {
  return (
    <div onClick={onAdd} className="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      {count > 0 && <i>{count}</i>}
    </div>
  );
};
