import React, { Component } from 'react';
import Person from './Person/Person'


class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'HEllo'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering');
        return this.props.people.map((person, index) => {
        return (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.props.clicked.bind(this, index)}
                changed={this.props.changed.bind(this, person.id)}
            />
            );
        });
    }
}

export default Persons