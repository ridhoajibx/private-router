import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const MainLayouts = (props) => {

    return (
        <div>
            <Header display={props.display} />
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