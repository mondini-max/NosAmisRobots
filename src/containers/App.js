import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
    // console.log('test performance 1', 'constructor()');
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // console.log('check lifecycle methods');
    // console.log('test performance 2', 'componentDidMount()');
  }
  onSearchChange = (event) => {
    let search = event.target.value;
    this.setState({ searchfield: search });
  };
  render() {
    const { robots, searchfield } = this.state;
    const searchedRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // console.log('test performance 3', 'render()');
    // console.log(searchedRobot);
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f2'>Nos amis robots</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={searchedRobot} />
          </ErrorBoundry>
        </Scroll>
        <Footer />
      </div>
    );
  }
}

export default App;
