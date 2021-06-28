import React, { Component } from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import './App.css';
import Scroll from './components/Scroll';

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
    const searchedRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    // console.log('test performance 3', 'render()');
    // console.log(searchedRobot);
    if (this.state.robots === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>Robot friends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={searchedRobot} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
