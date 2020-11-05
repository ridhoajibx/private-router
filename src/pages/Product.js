import React from 'react';
import Footer2 from '../components/Footer';
import Authentication from './Authentication';
import './Authentication.scss';
import { connect } from 'react-redux';
import ProductSubscription from '../components/ProductSubs';


const Product = (props) => {
    return (
        <div className="Product">
            {props.global.show ? <div className="back-drop"></div> : null}
            <Authentication show={props.global.show} />
            <ProductSubscription />
            <Footer2 />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        global: state.global
    }
}
export default connect(mapStateToProps)(Product);
