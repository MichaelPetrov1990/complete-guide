import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Michael", age: 30 },
      { name: "Chloe", age: 26 },
      { name: "Ali", age: 50 }
    ]
  })

  const switchNameHandler = () => {
    // console.log('was clicked')
    // DON'T DO THIS: this.state.persons[1].name = "Chloby"
    setPersonsState({
      persons: [
        { name: "Michael", age: 30 },
        { name: "Chlobalicious", age: 26 },
        { name: "Ali", age: 50 }
      ]
    })
  }

  return (
    <div className="App">
      <h1> We are on React baby!</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name="Michael" age="30" />
      <Person name="Ali" age="50" > My hobby is vests </Person>
    </div>
  );
}

export default App;



// switchNameHandler = () => {
//   // console.log('was clicked')
//   // DON'T DO THIS: this.state.persons[1].name = "Chloby"
//   this.setState({
//     persons: [
//       { name: "Michael", age: 30 },
//       { name: "Chlobalicious", age: 26 },
//       { name: "Ali", age: 50 }
//     ]
//   })
// }