import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
/* import Posts from './Posts'; */

class App extends Component {
  state = {
    persons: [
      { id: '1',name: "GINNI", age: 27 },
      { id: '2', name: "JATIN", age: 29 },
      { id: '3', name: "Baby", age: 0 }
    ],
    showPersons: false
  }  

  nameChangedHandler = (event,personIndex) => {
  ///Spreading out object of array to a new object so that changes can be applied not to the original one--
	const newPerson=[...this.state.persons[personIndex]]
////Assinging the new entered text values to that new object--
	newPerson.name=event.target.value
//////Spreading out the all objects of  main persons array in another array(copy)--- 
	const newPersons=[...this.state.persons]
//////Assigning the new object to the new copy 
	newPersons[personIndex]=newPerson;
	////changing the state of the main to chnaged copy array
	this.setState({persons: newPersons});
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
   /*  const array=["ginni","jatin","baby"];
    console.log(array);
    const newarray=array.slice();
    console.log(newarray);
    const newarrays=[...array];
    console.log(newarrays); */
  }
  
  deletePersonHandler = (event,personIndex) =>
  {
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
             return <Person 
                      click={(event) => this.deletePersonHandler(event,index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
					  changed={(event) => this.nameChangedHandler(event,index)}
                    />
          })}
        </div>
      );

      style.backgroundColor='red' ;
    }
    
    let classes=[];

    if(this.state.persons.length<=2)
    {
        classes.push('red');
    }

    if(this.state.persons.length<=1)
    {
        classes.push('bold');
    }


    return (
      <div className="App">
		<h1> Hi,I'm a REACT App</h1>
		<p className={classes.join(' ')}>This is working</p>
		<button
			style={style}
			onClick={this.toggleHandler}>
			Toggle Names
		</button>
		{persons}
      </div>
    );
  }
}

export default App;
