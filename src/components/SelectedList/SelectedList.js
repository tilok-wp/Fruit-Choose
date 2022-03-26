import React from 'react';
import './SelectedList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedList = ({item, deleteCartItem}) => {
    const {id, fruitName, picture} = item
    return (
        <div className='selected-item'>
            <img src={picture} alt="fruit" />
            <h3>{fruitName}</h3>
            <button onClick={() => deleteCartItem(id)} >{<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}</button>
        </div>
    );
};

export default SelectedList;