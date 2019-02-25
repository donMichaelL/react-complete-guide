import React, { PureComponent } from 'react';
import Person from './Person/Person'


class Persons extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log('[Persons.js] shouldComponentUpdate');
    //     // return true;
    //     if(nextProps.people !== this.props.people) {
    //         return true;
    //     }
    //     return false;
    // };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'HEllo'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componenent will unmount');
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