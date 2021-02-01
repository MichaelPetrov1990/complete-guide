import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Michael", age: 30 },
      { name: "Chloe", age: 26 },
      { name: "Ali", age: 50 }
    ]
  }


  render() {
    return (
      <div className="App">
        <h1> We are on React baby!</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name="Michael" age="30" />
        <Person name="Ali" age="50" > My hobby is vests </Person>
      </div>
    );
  }
}

export default App;
