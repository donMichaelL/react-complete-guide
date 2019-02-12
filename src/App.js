import React, { Component } from 'react';
import classes from './App.module.css';
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
    let person = null;
    var buttonClass = null;

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
      buttonClass = classes.Red;
    };

    const assignedClass = [];
    if (this.state.people.length <=2){
      assignedClass.push( classes.red );
    };
    if (this.state.people.length <=1){
      assignedClass.push( classes.bold );
    };

    return (
      <div className={["myclass", classes.App].join(' ')}>
        <h1>Hi, I am a react App</h1>
        <p className={assignedClass.join(' ')}>Warning!</p>
        <button className={buttonClass} onClick={this.togglePerson}>Switch Name</button>
        {person}
      </div>
      // React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is it working now?'))
    );
  }
}

export default App;