import React from 'react';
import './form-button.style.scss';

const FormButton = ({children, isGoogleSignIn, inverted, ...otherProps}) =>
    (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );

    export default FormButton;