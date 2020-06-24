import React from 'react';

import './cart-item.style.scss';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const CartItem = ({ item: {imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price' >{quantity} X ${price.toFixed(2)}</span>
        </div>
        <div className='item-remove'>
            <DeleteForeverIcon />
        </div>
    </div>
)

export default CartItem;