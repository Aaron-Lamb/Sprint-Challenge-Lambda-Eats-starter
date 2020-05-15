import React from "react";
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route path='/' component={HomePage} />
    </>
  );
};
export default App;
