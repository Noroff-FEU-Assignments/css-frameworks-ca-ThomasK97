import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                
                    <img src={props.src} alt='Image' />
                
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.label}</h5>
                    <h2 className='cards__item__text'>{props.text}</h2>
                </div>
            </Link>
        </li>
            
        </>
    )
}

export default CardItem;
