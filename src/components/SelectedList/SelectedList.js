import React from 'react';
import './SelectedList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedList = (props) => {
    const {id, fruitName, picture} = props.item
    return (
        <div className='selected-item'>
            <img src={picture} alt="image" />
            <h3>{fruitName}</h3>
            <button>{<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}</button>
        </div>
    );
};

export default SelectedList;