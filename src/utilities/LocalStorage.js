const getCartLocalStorage = () => {
    const storeCart = localStorage.getItem('cart'); // localstorage thake neay asa
    if (storeCart) {
        const cart = JSON.parse(storeCart);
        return cart;
    }
    return [];
};

const saveCartLocalStorage = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
};

const addCartLocalStorage = (id) => {
    const cart = getCartLocalStorage();
    const newCart = [...cart, id];
    //save newCart to localStorage
    saveCartLocalStorage(newCart);
};

const removeCartLocalStorage = (id) => {
    const storeCart = getCartLocalStorage();
    const newUpdateCart = storeCart.filter(storeId => storeId !== id);
    saveCartLocalStorage(newUpdateCart);
}

export { 
    getCartLocalStorage as getStoreCart, 
    addCartLocalStorage as addStoreCart,
    removeCartLocalStorage as removeStoreCart
};