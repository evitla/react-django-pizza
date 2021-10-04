import React from 'react';

import { PizzaBlock } from '../components';

import IPizzaProps from '../types/PizzaProps';

const Home = ({ items }: { items: IPizzaProps[] }) => {
  return (
    <div className="container">
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
