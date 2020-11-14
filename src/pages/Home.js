import React from 'react';
import Jumbotron2 from '../components/Jumbotron';
import Footer2 from '../components/Footer';
import Authentication from './Authentication';
// import Loader from '../components/authentication/Loader';
import './Authentication.scss';
import { connect } from 'react-redux';



const Home = (props) => {
    return (
        <div className="home">
            {props.global.show ? <div className="back-drop"></div> : null}
            <Authentication show={props.global.show} />
            <Jumbotron2 />
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
