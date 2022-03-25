import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className='products-wrapper'>
                <h4>Grid cloumn</h4>
                <h4>Grid cloumn</h4>
                <h4>Grid cloumn</h4>
                <h4>Grid cloumn</h4>
            </div>
            <div className='cart-wrapper'>
                <h1>Selected Fruit</h1>
                <button>Choose 1 for me</button>
                <button>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;