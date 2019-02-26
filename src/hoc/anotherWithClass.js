import React from 'react';


const anotherWithClass = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent/>
            </div>
        );
    };
};


export default anotherWithClass;