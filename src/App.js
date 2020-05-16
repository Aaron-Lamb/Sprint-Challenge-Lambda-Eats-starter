import React from "react";
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route path='/' component={HomePage} />
      <Route path='/pizza' component={PizzaForm} />
    </>
  );
};
export default App;
