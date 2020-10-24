import React from 'react';
import Jumbotron2 from '../components/Jumbotron';
import Slide from '../components/Carousel';
import Footer2 from '../components/Footer';
const Home = () => {
    return ( 
        <div className="home">
        <Jumbotron2 />  
        <Slide />
        <Footer2 />
        </div>
    );
}

export default Home;
