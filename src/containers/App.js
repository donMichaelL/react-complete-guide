import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[Apps.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] component did mount');
  }

  shouldComponentUpdate(nextPros, nextState) {
    console.log('[Apps.js] should component udpate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] component did updated');
  }

  state = {
    people: [
      {id: "asdfasdfsd", name: "Michael", age: 31},
      {id: "gfssdfsd", name: "Jeniffer", age: 22},
      {id: "fdwasdfasgd", name: "Nick", age:15}
    ],
    anotherAttribute: 'hello',
    showPerson: false,
    showCockpit: true
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
    console.log('[App.js] render');
    let person = null;

    if(this.state.showPerson) {
      person = 
      <div>
        <Persons 
          people={this.state.people}
          clicked={this.deleteHandler}
          changed={this.changeNameHandler}/>
      </div>
    };

    return (
      <div className={["myclass", classes.App].join(' ')}>
        <button onClick={()=> {
          this.setState({showCockpit: false})
        }}>Remove Cockpit</button>
        { this.state.showCockpit ? 
          <Cockpit
            title={this.props.appTitle}
            clicked={this.togglePerson} 
            peopleLength={this.state.people.length}
            showPerson={this.state.showPerson}/> : null   
        }
        {person}
      </div>
      // React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is it working now?'))
    );
  }
}

export default App;