export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.Id === cartItemsToAdd.Id
    ); 
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.Id === cartItemsToAdd.Id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
    }
    return [...cartItems, { ...cartItemsToAdd, quantity: 1 }]
};