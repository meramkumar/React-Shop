import React from 'react'; 
import './collection-item.style.scss';

import CustomButton from '../form-button/form-button.component';

import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return(
    <div className='collection-item'>
        <div className='image'
            style={
                {
                    backgroundImage: `url(${imageUrl})`
                }} />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price.toFixed(2)}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> Add to Cart </CustomButton>
    </div>
)
}

const mapDispatchToProps = d => ({
    addItem: item => d(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);