import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { onSelect, CategoryType } from '../../store/categoriesSlice';

import Category from './Category';

const Categories = ({ items }: { items: CategoryType[] }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(0);

  const handleSelect = (item: CategoryType | string = '', index: number = 0) => {
    setActive(index);
    dispatch(onSelect({ item, index }));
  };

  return (
    <div className="categories">
      <ul>
        <Category active={active === 0} item="Все" onSelect={handleSelect} />

        {items.map((item, index) => (
          <Category
            key={index}
            active={active === index + 1}
            item={item}
            onSelect={() => handleSelect(item, index + 1)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
