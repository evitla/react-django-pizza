import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Categories } from './components/Filters';
import { SortPopup } from './components/Filters';
import { activeItemSelector } from './store/sortingSlice';
import { optionsSelector } from './store/categoriesSlice';
import { filteredPizzasSelector, onSave } from './store/pizzaSlice';
import { getPizzas } from './api';

function App() {
  const dispatch = useDispatch();
  const options = useSelector(optionsSelector);

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
          <div className="container">
            <div className="content__top">
              <Categories items={options} />
              <SortPopup items={['популярности', 'цене', 'алфавиту']} />
            </div>
          </div>
          {pizzas.length > 0 ? <Home items={pizzas} /> : <span>Loading...</span>}
        </Route>
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
