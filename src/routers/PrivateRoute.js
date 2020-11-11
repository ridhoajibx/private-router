import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ comp:Component, child: Children, display, toggleSide, handleToggleSide, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => auth ?
                (<Component {...props} display={ display } toggleSide={toggleSide} handleToggleSide={handleToggleSide}>
                    <Children toggleSide={toggleSide} handleToggleSide={handleToggleSide} />
                </Component>) :
                (<Redirect to={{ pathname:'/' }} />)
            }
        />
    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.global.isAuthenticated,
    };
  };

export default connect(mapStateToProps)(PrivateRoute);
