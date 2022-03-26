// use local storage to manage cart data
const addLocalStorage = id =>{
    let cartData = {};
    const storedCart = localStorage.getItem('fruit-cart');
    if(storedCart){
        cartData = JSON.parse(storedCart);
    }
     if(!cartData[id]){
        cartData[id] = 1;
    }
    localStorage.setItem('fruit-cart', JSON.stringify(cartData));
}
// Remove item
const removeItem = id =>{
    const storedCart = localStorage.getItem('fruit-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('fruit-cart', JSON.stringify(shoppingCart));
        }
    }
}

// Get data from local storage
const getLocalStorageData = () =>{
    let cartData = {};
    const storedCart = localStorage.getItem('fruit-cart');
    if(storedCart){
        cartData = JSON.parse(storedCart);
    }
    return cartData;
}
// Clear local storage
const emptyCart = (id) =>{
    localStorage.removeItem(id);    
}

export {
    addLocalStorage, 
    removeItem,
    getLocalStorageData,
    emptyCart
}