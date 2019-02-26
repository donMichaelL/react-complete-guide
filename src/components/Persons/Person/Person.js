import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    render() {
        console.log('[Person.js] Component rendering...');
        return (
            <Aux>
                <WithClass classes={classes.Person}>
                    <p onClick={this.props.click}>I am a {this.props.name} and i am {this.props.age}!</p>
                    {this.props.children && <p>{this.props.children}</p>}
                    <input type="text" onChange={this.props.changed} value={this.props.name}></input>
                </WithClass>
            </Aux>
        )
    };
};

export default Person;