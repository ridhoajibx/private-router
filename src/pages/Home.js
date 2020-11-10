import React from 'react';
import Jumbotron2 from '../components/Jumbotron';
import Footer2 from '../components/Footer';
import Authentication from './Authentication';
import Loader from '../components/authentication/Loader';
import './Authentication.scss';
import { connect } from 'react-redux';
import Carousel2 from '../components/Carousel';
import { NavLink } from 'react-router-dom';



const Home = (props) => {
    return (
        <div className="home">
            {props.global.show ? <div className="back-drop"></div> : null}
            <Authentication show={props.global.show} />
            <Jumbotron2 />
            <Carousel2 />
            <NavLink className="nav-link" exact to="/Product">and see more...</NavLink>
            <Footer2 />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        global: state.global
    }
}
export default connect(mapStateToProps)(Home);
