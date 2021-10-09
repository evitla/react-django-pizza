import React from 'react';

import { PizzaBlock } from '../components';

import IPizzaProps from '../types/PizzaProps';

const Home = ({ items }: { items: IPizzaProps[] }) => {
  return (
    <>
      {items.map((item) => (
        <PizzaBlock key={item.id} {...item} />
      ))}
    </>
  );
};

export default Home;
