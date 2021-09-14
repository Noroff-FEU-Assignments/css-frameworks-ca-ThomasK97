import React from 'react';
import Carditem from './CardItem';
import './ImageCards.css';
import image4 from './../Tab images/tab-1.jpg';
import image5 from './../Tab images/tab-2.jpg';
import image6 from './../Tab images/tab-3.jpg';


function ImageCards() {
    return (
        <div className='cards'>
            <h1>We do YAY Things</h1>
            <p>kjdsnkjsdnksdjv</p>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Carditem
                        src={image4}
                        label= "Television"
                        text="Morbi eget efficitur turpis. 
                        Vivamus pellentesque tortor massa, venenatis 
                        pharetra leo laoreet a. Nullam non eleifend justo, 
                        a ullamcorper turpis. Cras vehicula pharetra lectus 
                        non maximus. Sed condimentum mattis rhoncus. " 
                        path='/news'
                        />
                        <Carditem
                        src={image5}
                        label="Pictures"
                        text="Morbi eget efficitur turpis. 
                        Vivamus pellentesque tortor massa, venenatis 
                        pharetra leo laoreet a. Nullam non eleifend justo, 
                        a ullamcorper turpis. Cras vehicula pharetra lectus 
                        non maximus. Sed condimentum mattis rhoncus. " 
                        path='/news'
                        />
                        <Carditem
                        src={image6}
                        label="This is YAY"
                        text="Morbi eget efficitur turpis. 
                        Vivamus pellentesque tortor massa, venenatis 
                        pharetra leo laoreet a. Nullam non eleifend justo, 
                        a ullamcorper turpis. Cras vehicula pharetra lectus 
                        non maximus. Sed condimentum mattis rhoncus. " 
                        path='/news'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default ImageCards

