import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    console.log('[Person.js] rendering');
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>I am a {props.name} and i am {props.age}!</p>
        {props.children && <p>{props.children}</p>}
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
}

export default person;