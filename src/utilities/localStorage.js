const getStorageCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
const saveCartToLocalStorage = cart =>{
    const cartStringied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringied);
}
const addToLocalStorage = id =>{
    const cart = getStorageCart();
    cart.push(id);
    // save to local storage 
    saveCartToLocalStorage(cart);
}
const removeFromLocalStorage = id =>{
    const cart = getStorageCart()
    const remaining =cart.filter(idx=>idx!==id);
    saveCartToLocalStorage(remaining)
}
export {addToLocalStorage, getStorageCart, removeFromLocalStorage};