import React, { useState, useEffect, createContext } from 'react';

import { addItemToCart, removeItemFromCart, clearItemFromCart, getCartItemsCount, getCartItemsTotalPrice } from './cart.utils';


export const CartContext = createContext({
    hidden: true,
    cartItems: [],
    toggleHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
    cartItemsCount: 0,
    cartItemsTotalPrice: 0
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItemsTotalPrice, setCartItemsTotalPrice] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = item => setCartItems(clearItemFromCart(cartItems, item));

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartItemsTotalPrice(getCartItemsTotalPrice(cartItems));
    }, [cartItems]);
    
    return (
        <CartContext.Provider value={{
            hidden,
            cartItems,
            toggleHidden,
            addItem,
            removeItem,
            clearItem,
            cartItemsCount,
            cartItemsTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;