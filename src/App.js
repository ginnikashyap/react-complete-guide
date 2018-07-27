import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
/* import Posts from './Posts'; */

class App extends Component {
  state = {
    persons: [
      { name: "GINNI", age: 27 },
      { name: "JATIN", age: 29 }

    ]
  }
  switchNamesHandler = (newName,newAge) => {
    /* console.log("Clicked"); */
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: "JATIN ", age: 29 }
      ]
    });
  }
  render() {
    return (
      <div className="App">

        <h1>Hi,I'm a REACT App</h1>
        <p>This is working</p>
        <button onClick={this.switchNamesHandler.bind(this,"GINNI jatin KASHYAP",9)}>
          Switch Names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNamesHandler.bind(this,"ginni jatin kashyap",10)}
        >
          My Hobbies:singing
        </Person>

      </div>
    );
  }
}

export default App;
