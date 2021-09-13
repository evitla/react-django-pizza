import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router';
import axios from 'axios';
import { sortBy, prop } from 'ramda';

import { Header } from './components';
import { Home, Cart } from './pages';
import { activeItemSelector } from './store/sortingSlice';
import { onSave } from './store/pizzaSlice';
import IPizzaProps from './types/PizzaProps';

// const URL = 'http://localhost:3000/db.json';
const URL = 'http://localhost:8000/api/pizzas/';
const props = ['rating', 'price', 'name'];

function App() {
  const sortType = useSelector(activeItemSelector);
  const [pizzas, setPizzas] = useState<IPizzaProps[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(URL).then(({ data }: { data: IPizzaProps[] }) => {
      if (data) {
        const sorted: IPizzaProps[] = sortBy(prop(props[sortType]))(data);
        if (sortType === 0) {
          sorted.reverse();
        }
        setPizzas(sorted);
        dispatch(onSave(data));
      }
    });
  }, [sortType, dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Home items={pizzas} />
        </Route>
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
