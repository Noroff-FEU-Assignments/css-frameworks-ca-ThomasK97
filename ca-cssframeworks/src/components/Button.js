import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn-medium', 'btn--large'];

export const Button = ({children, type, onclick, buttonStyle, buttonSize}) =>{
    const buttonCheckStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const buttonCheckSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return(
        <Link to='/search' className='btn-mobile'>
            <button
            className={`btn ${buttonCheckStyle} ${buttonCheckSize}`}
            onClick={onclick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};
