import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';
import { activeItemSelector } from './store/sortingSlice';
import { filteredPizzasSelector, onSave } from './store/pizzaSlice';
import IPizzaProps from './types/PizzaProps';

const BASE_URL = 'http://localhost:8000/api/pizzas/';
const SORT_URL = BASE_URL + '?ordering=';
const props = ['rating', 'price', 'name'];

function App() {
  const sortType = useSelector(activeItemSelector);
  // const [pizzas, setPizzas] = useState<IPizzaProps[]>([]);
  const pizzas = useSelector(filteredPizzasSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(SORT_URL + props[sortType]).then(({ data }: { data: IPizzaProps[] }) => {
      if (data) {
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
