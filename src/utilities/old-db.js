// Use localStorage manage to save data
const addToLocalStorage = id => {
    let cartData = {};
    // Get card data
    const getCardData = localStorage.getItem('cart-storage')
    if(getCardData){
        cartData = (JSON.parse(getCardData))
    }
    // Quantity add
    const quantity = cartData[id]
    if(!quantity){
        cartData[id] = 1
    }else{
        alert('Already added this item')     
    }
    console.log(cartData)
    localStorage.setItem('cart-storage', JSON.stringify(cartData))

}
// Remove cart item option
const removeToCart = (idName) => {
    const getCardData = localStorage.getItem('cart-storage')
    if(getCardData){
    const getCardDataObj = JSON.parse(getCardData)
    if(idName in getCardDataObj){
            delete getCardDataObj[idName]
            localStorage.setItem('cart-storage', JSON.stringify(getCardDataObj))
        }
    }

}
// Remove all cart items option
const emptyCart = (storageId) => {
    localStorage.removeItem(storageId)
}
// Get local store data
const getToLocalStorage = () => {
    let newCart = {}
    const storedCart = localStorage.getItem('cart-storage')
    if(storedCart){
        newCart = JSON.parse(storedCart)
    }
    return newCart 
}

export {
    addToLocalStorage,
    removeToCart,
    emptyCart,
    getToLocalStorage
}