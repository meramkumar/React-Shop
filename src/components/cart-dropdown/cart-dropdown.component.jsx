import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../form-button/form-button.component';
  
const CartDropDown = () =>
    (
        <div className='cart-dropdown'>
            <div className='cart-items' />

            <CustomButton>Go to Checkout</CustomButton>
        </div>
)

export default CartDropDown;