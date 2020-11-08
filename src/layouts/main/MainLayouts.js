import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const MainLayouts = (props) => {

    return (
        <div>
            <Header Auth={props.Auth} display={props.display} setAuth={ props.setAuth } />
            <div>
                {props.children}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(MainLayouts);