import React from 'react';

const Category = ({ active, item, onSelect }: Props) => (
  <li className={active ? 'active' : ''} onClick={onSelect} key={item}>
    {item}
  </li>
);

export default Category;

type Props = {
  active: boolean;
  item: string;
  onSelect: () => void;
};
