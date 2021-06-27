import React from 'react';
import CardList from './components/CardList';
import { robots } from './data/robots';
const App = () => {
  return (
    <div>
      <CardList robots={robots} />
    </div>
  );
};

export default App;
