import React from 'react';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onMouseEnter={toggleCartHidden} onMouseLeave={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = d => ({
    toggleCartHidden: () => d(toggleCartHidden())
});


export default connect(null, mapDispatchToProps)(CartIcon);