const getStoredCart = ()=>{
    const cartStr = localStorage.getItem('cart');
    return cartStr? JSON.parse(cartStr) : [];
}

const saveCartToStorage = (cart)=>{
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addToCart = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToStorage(cart);
}

export {addToCart}