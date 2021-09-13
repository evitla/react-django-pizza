import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Category from './Category';
import { onSelect, activeItemSelector, CategoryType } from '../store/categoriesSlice';

const Categories = ({ items }: { items: CategoryType[] }) => {
  const dispatch = useDispatch();
  const activeItem = useSelector(activeItemSelector);

  return (
    <div className="categories">
      <ul>
        <Category
          active={activeItem.index === ''}
          item="Все"
          onSelect={() => dispatch(onSelect({ item: '', index: '' }))}
        />

        {items.map((item, index) => (
          <Category
            key={index}
            active={activeItem.index === index}
            item={item}
            onSelect={() => dispatch(onSelect({ item, index }))}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
