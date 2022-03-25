import React from 'react';
import './ReactAbout.css'

const ReactAbout = (props) => {
    const {heading, paragraph} = props.item
    return (
        <div className='about-item'>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
    );
};

export default ReactAbout;