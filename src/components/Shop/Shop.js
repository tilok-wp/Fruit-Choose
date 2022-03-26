import React, { useEffect, useState } from 'react';
import { addLocalStorage, emptyCart, getLocalStorageData } from '../../utilities/dataBaseManage';
import Fruit from '../Fruit/Fruit';
import SelectedList from '../SelectedList/SelectedList';
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

    useEffect( () =>{
        const storedOrder = getLocalStorageData()
        const savedOrder = [];

        for(const id in storedOrder){
            const addedMeal = fruits.find(meal => meal.id === id);
            if(addedMeal){
                const quantity = storedOrder[id];
                addedMeal.quantity = quantity;
                savedOrder.push(addedMeal);
            }
        }
        setCart(savedOrder);
    }, [fruits])

// Add to cart click handler
    const addToCart = fruit =>{
        if(cart.length < 4){
            let newOrders = [];
            const exists = cart.find(item => item.id === fruit.id);
            if(!exists){
                newOrders = [...cart, fruit];
            }
            else{
                newOrders = [...cart];
                alert('This Fruit already added')
            }
            
            setCart(newOrders);
            addLocalStorage(fruit.id)
        }else {
            alert("4 Fruit Already added. Click on Choose again")
        }
    }
// Empty cart data
    const clearCart = () => {
        emptyCart('fruit-cart')
        setCart([])
    }

    const randomSelect = (products) =>{
        let randomProduct = []
            if(products.length > 0){
                const ramdomNumber =  Math.floor(Math.random()* cart.length)
                randomProduct.push(cart[ramdomNumber])
            }
            setCart(randomProduct) 
    }

    return (
        <div className='shop-container'>
            <div className='products-wrapper'>
            {fruits.map(fruit => <Fruit 
                    key={fruit.id}
                    fruit={fruit}
                    addToCart={addToCart}
                ></Fruit>)}
            </div>
            <div>
                <div className='cart-wrapper'>
                    <h2>Selected Fruit {cart.length}</h2>
                    {cart.map(item => <SelectedList 
                        key={item.id}
                        item={item}
                    ></SelectedList>)}
                    <button onClick={() => randomSelect(cart)}>Choose 1 for me</button>
                    <button onClick={() => clearCart() }>Choose again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;