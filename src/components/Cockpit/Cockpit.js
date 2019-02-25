import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(()=> {
    console.log('[Cockpit.js] use effects');

    const timer =setTimeout(()=> {
      alert('Hey you');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cockpit unmount');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd use effects');

    return ()=> {
      console.log('[Cockpit.js] 2nd cockpit unmount');
    };
  });

  const assignedClass = [];
  if (props.peopleLength <=2){
    assignedClass.push( classes.red );
  };
  if (props.peopleLength <=1){
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


export default React.memo(Cockpit);