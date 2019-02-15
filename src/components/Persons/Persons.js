import React from 'react';
import Person from './Person/Person'


const Persons = (props) => 
            props.people.map((person, index)=>
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={props.clicked.bind(this, index)}
                changed={props.changed.bind(this, person.id)}
            />
            )



export default Persons