import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Category from './Category';
import { onSelect, CategoryType } from '../../store/categoriesSlice';

const Categories = ({ items }: { items: CategoryType[] }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(0);

  const handleSelectAll = () => {
    setActive(0);
    dispatch(onSelect({ item: '', index: 0 }));
  };

  const handleSelect = (item: CategoryType, index: number) => {
    setActive(index);
    dispatch(onSelect({ item, index }));
  };

  return (
    <div className="categories">
      <ul>
        <Category active={active === 0} item="Все" onSelect={handleSelectAll} />

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
