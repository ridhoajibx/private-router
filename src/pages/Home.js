import React from 'react';
import Jumbotron2 from '../components/Jumbotron';
import Component from '../components/Carousel';
import Footer2 from '../components/Footer';
import Authentication from './Authentication';
import './Authentication.scss';
import { connect } from 'react-redux';
import Carousel2 from '../components/Carousel';


const Home = (props) => {
    return ( 
        <div className="home">
        { props.show ? <div className="back-drop"></div> : null}
        <Authentication show={props.show}/>
        <Jumbotron2 />  
        <Carousel2 />
        <Footer2 />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        show: state.show
    }
}
export default connect(mapStateToProps)(Home);
