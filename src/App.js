import React, { Component } from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import { robots } from './data/robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
    console.log('test performance 1', 'constructor()');
  }
  componentDidMount() {
    console.log('check lifecycle methods');
    this.setState({ robots: robots });
    console.log('test performance 2', 'componentDidMount()');
  }
  onSearchChange = (event) => {
    let search = event.target.value;
    this.setState({ searchfield: search });
  };
  render() {
    const searchedRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log('test performance 3', 'render()');
    // console.log(searchedRobot);
    return (
      <div className='tc'>
        <h1 className='f2'>Robot friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={searchedRobot} />
      </div>
    );
  }
}

export default App;
