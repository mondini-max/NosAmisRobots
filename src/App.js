import React, { Component } from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import { robots } from './data/robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
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
    // console.log(searchedRobot);
    return (
      <div className='tc'>
        <h1>Robot friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={searchedRobot} />
      </div>
    );
  }
}

export default App;
