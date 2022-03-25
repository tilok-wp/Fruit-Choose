import React from 'react';
import './Fruit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Fruit = ({fruit, addToCart}) => {
    const {id, fruitName, price, picture} = fruit 
    return (
        <div className='item'>
            <img src={picture} alt="FruitImage" />
            <h3>{fruitName}</h3>
            <strong>Price: $ {price} </strong>
            <button onClick={() =>addToCart(id) }>Add to cart {<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>} </button>
        </div>
    );
};

export default Fruit;