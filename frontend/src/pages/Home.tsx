import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, PizzaBlock, SortPopup } from '../components';
import { optionsSelector, activeItemSelector } from '../store/categoriesSlice';

import IPizzaProps from '../types/PizzaProps';

const Home = ({ items }: { items: IPizzaProps[] }) => {
  const options = useSelector(optionsSelector);
  const activeItem = useSelector(activeItemSelector);

  if (items.length === 0) return <span>К сожалению пиццы в категорий {activeItem.item} нет.</span>;

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={options} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
