import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const assignedClass = [];
    if (props.people.length <=2){
      assignedClass.push( classes.red );
    };
    if (props.people.length <=1){
      assignedClass.push( classes.bold );
    };

    let buttonClass = null;
    if(props.showPerson) {
        buttonClass = classes.Red;
    };


   return  (<div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClass.join(' ')}>Warning!</p>
        <button className={buttonClass} onClick={props.clicked}>Switch Name</button>
    </div>
   )
};


export default Cockpit;