import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {id: "asdfasdfsd", name: "Michael", age: 31},
      {id: "gfssdfsd", name: "Jeniffer", age: 22},
      {id: "fdwasdfasgd", name: "Nick", age:15}
    ],
    anotherAttribute: 'hello',
    showPerson: false
  }

  deleteHandler = (index) => {
    const person = [...this.state.people];
    person.splice(index, 1);
    this.setState({people: person});
  }

  changeNameHandler = (id, event) => {
    
    const personIndex = this.state.people.findIndex( p => {
      return p.id === id
    });

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const newPeople = [...this.state.people];
    newPeople[personIndex] = person;


    this.setState({
      people: newPeople
    });
  }

  togglePerson = () => {
    const currentState = this.state.showPerson;
    this.setState({
      showPerson: !currentState
    });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let person = null;

    if(this.state.showPerson) {
      person = 
      <div>
        {this.state.people.map((person, index) => {
          return <Person 
                  key={person.id} 
                  click={this.deleteHandler.bind(this, index)} 
                  name={person.name} 
                  age={person.age} 
                  changeName={this.changeNameHandler.bind(this, person.id)}/>
        })}
      </div>

      style.backgroundColor = 'red';
    };

    const classes = [];
    if (this.state.people.length <=2){
      classes.push('red');
    };
    if (this.state.people.length <=1){
      classes.push('bold');
    };

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p className={classes.join(' ')}>Warning!</p>
        <button style={style} onClick={this.togglePerson}>Switch Name</button>
        {person}
      </div>
      // React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is it working now?'))
    );
  }
}

export default App;