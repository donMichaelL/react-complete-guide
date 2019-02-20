import React, { Component } from 'react';
import classes from './Person.module.css';


class Person extends Component {
    render() {
        console.log('[Person.js] Component rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am a {this.props.name} and i am {this.props.age}!</p>
                {this.props.children && <p>{this.props.children}</p>}
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    };
};

export default Person;