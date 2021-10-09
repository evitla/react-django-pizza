import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onPizzaSelect, countClickSelector } from '../../store/pizzaSlice';

import IPizzaProps from '../../types/PizzaProps';
import Details from './Details';
import AddButton from './AddButton';

const PizzaBlock = ({ name, imageUrl, price, types, sizes, id }: IPizzaProps) => {
  const dispatch = useDispatch();
  const timesClicked = useSelector(countClickSelector(id));

  const [activeType, setActiveType] = useState<0 | 1>(types[0]);
  const [activeSize, setActiveSize] = useState<0 | 1 | 2>(0);

  const handleAdd = () =>
    dispatch(
      onPizzaSelect({
        id,
        name,
        imageUrl,
        price,
        types: activeType,
        sizes: activeSize,
        count: 0,
      }),
    );

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />

      <h4 className="pizza-block__title">{name}</h4>

      <Details
        types={types}
        sizes={sizes}
        activeType={activeType}
        activeSize={activeSize}
        onSelectType={(index: 0 | 1) => setActiveType(index)}
        onSelectSize={(index: 0 | 1 | 2) => setActiveSize(index)}
      />

      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <AddButton onAdd={handleAdd} count={timesClicked} />
      </div>
    </div>
  );
};

export default PizzaBlock;
