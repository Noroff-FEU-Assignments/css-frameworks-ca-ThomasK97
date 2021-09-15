import React from 'react';
import '../../App.css';
import HeroSlider from '../HeroSlider';
import ImageCards from '../ImageCards';
import Footer from '../Footer';
import { Tab } from 'bootstrap';
import TabComponent from '../Tab';


function Home () {
    return(
        <>
        


        <HeroSlider />
        <TabComponent />
    
        <Footer />


        </>
    );
}

export default Home;
