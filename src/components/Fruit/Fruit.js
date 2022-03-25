import React from 'react';
import './Fruit.css'

const Fruit = ({fruit, addToCart}) => {
    const {id, fruitName, price, picture} = fruit 
    return (
        <div className='item'>
            <img src={picture} alt="FruitImage" />
            <h3>{fruitName}</h3>
            <strong>Price: $ {price} </strong>
            <button onClick={() =>addToCart(id) }>Add to cart </button>
        </div>
    );
};

export default Fruit;