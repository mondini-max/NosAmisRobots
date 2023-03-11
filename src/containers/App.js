import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet'


const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  // const [count, setCount] = useState(0);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => setRobots(user));
    // console.log(count);
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
    <Helmet>
                <meta charSet="utf-8" />
                <title>Nos amis robots</title>
                <link rel="canonical" href="https://mondini-max.github.io/NosAmisRobots/" />
      </Helmet>
      <h1 className='f2'>Nos amis robots</h1>
      {/* <button onClick={() => setCount(count + 1)}>click me </button> */}
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
