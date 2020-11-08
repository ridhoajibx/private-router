import React from 'react';
import Jumbotron2 from '../components/Jumbotron';
import Slide from '../components/Carousel';
import Footer2 from '../components/Footer';
import Authentication from './Authentication';
import Loader from '../components/authentication/Loader';
import './Authentication.scss';
import { connect } from 'react-redux';

const Home = (props) => {
    return ( 
        <div className="home">
                { props.show ? <div className="back-drop"></div> : null}
                <Authentication show={props.show}/>
                <Jumbotron2 />  
                <Loader />
                <Slide />
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
