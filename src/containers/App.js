import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => setRobots(user));
  }, []);
  const onSearchChange = (event) => {
    let search = event.target.value;
    setSearchfield(search);
  };

  const searchedRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className='tc'>
      <h1 className='f2'>Nos amis robots</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={searchedRobot} />
        </ErrorBoundry>
      </Scroll>
      <Footer />
    </div>
  );
};

export default App;
