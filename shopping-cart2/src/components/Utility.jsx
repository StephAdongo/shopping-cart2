import React from 'react';
const calculatePrice = (cartItems) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice);
}

const calculateNumberOfItems = (cartItems) => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
}

const toTitleCase = (str) => {
    return str
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .replace(/[_-]/g, ' ')
          .toLowerCase()
          .replace(/\b\w/g, (match, offset, fullStr) => {
                if (offset > 0 && fullStr[offset - 1] === "'") {
                      return match;
                }
                return match.toUpperCase();
          });
}

export { calculatePrice, calculateNumberOfItems, toTitleCase }