import React from "react";
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PizzaForm from './components/PizzaForm';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <AppDiv>
      <h1>Lambda Eats</h1>
      <Route path='/' component={HomePage} />
      <Route path='/pizza' component={PizzaForm} />
    </AppDiv>
  );
};
export default App;
