import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Shop.css'




const Shop = () => {

    // Usestate function to update fruts data
    const [fruits, setFruits] = useState([])
    // Usestate function to update Chart data
    const [cart, setCart] = useState([])
    
// Get date from json file
    useEffect( () =>{
        fetch('fruitDataFile.json')
        .then(req => req.json())
        .then(data => setFruits(data))
    },[])

    const addToCart = () => {
        console.log('btn clicked')
    }


    return (
        <div className='shop-container'>
            <div className='products-wrapper'>
                {fruits.map(fruit => <Fruit 
                    key={fruit.id}
                    fruit={fruit}
                    addToCart ={addToCart}
                ></Fruit>)}
            </div>
            <div>
                <div className='cart-wrapper'>
                    <h2>Selected Fruit</h2>
                    <button>Choose 1 for me</button>
                    <button>Choose again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;