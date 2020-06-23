import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = ({ cartItems, totalSum }) =>
    (<div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
                }
        </div> 
        <span className='total' >Total : ${totalSum.toFixed(2)}</span>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    );


const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
    totalSum: cartItems.reduce(
        (totalSum, cartItem) => totalSum + (cartItem.quantity * cartItem.price), 0)
});

 


export default connect(mapStateToProps)(CartDropDown);