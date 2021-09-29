import React from 'react';

const Category = ({
  active,
  item,
  onSelect,
}: {
  active: boolean;
  item: string;
  onSelect: () => void;
}) => {
  return (
    <li className={active ? 'active' : ''} onClick={onSelect} key={item}>
      {item}
    </li>
  );
};

export default Category;
