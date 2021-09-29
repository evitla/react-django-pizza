import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router';

import { Header } from './components';
import { Home, Cart } from './pages';
import { activeItemSelector } from './store/sortingSlice';
import { filteredPizzasSelector, onSave } from './store/pizzaSlice';
import { getPizzas } from './api';

function App() {
  const dispatch = useDispatch();

  const sortType = useSelector(activeItemSelector);
  const pizzas = useSelector(filteredPizzasSelector);

  useEffect(() => {
    const fetchPizzas = async () => {
      const res: any = await getPizzas(sortType);
      dispatch(onSave(res.data));
    };
    fetchPizzas();
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
