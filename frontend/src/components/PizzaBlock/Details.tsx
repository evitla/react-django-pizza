import React from 'react';
import classNames from 'classnames';

import { pizzaTypes, pizzaSizes } from '../../constants';

const Details = ({ types, sizes, activeType, activeSize, onSelectType, onSelectSize }: Props) => (
  <div className="pizza-block__selector">
    <ul>
      {pizzaTypes.map((type, index) => (
        <li
          key={type}
          className={classNames({
            active: activeType === index,
            disabled: !types.includes(index as 0 | 1),
          })}
          onClick={() => onSelectType(index as 0 | 1)}>
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
          onClick={() => onSelectSize(index as 0 | 1 | 2)}>
          {size} см.
        </li>
      ))}
    </ul>
  </div>
);

export default Details;

type Props = {
  types: [0, 1];
  sizes: [26, 30, 40];
  activeType: 0 | 1;
  activeSize: 0 | 1 | 2;
  onSelectType: (index: 0 | 1) => void;
  onSelectSize: (index: 0 | 1 | 2) => void;
};
