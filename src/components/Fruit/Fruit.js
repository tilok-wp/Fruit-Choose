import React from 'react';
import './Fruit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Fruit = ({fruit, addToCart}) => {
    const {fruitName, price, picture} = fruit
    
    return (
        <div className='item'>
            <img src={picture} alt="FruitImage" />
            <h3>{fruitName}</h3>
            <strong>Price: $ {price} </strong>
            <button onClick={() =>addToCart(fruit) }>Add to cart {<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} </button>
        </div>
    );
};

export default Fruit;