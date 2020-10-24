import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ setAuth, Auth, comp:Component, child: Children, display, toggleSide, handleToggleSide, ...rest }) => {
    console.log('ini auth', Auth);
    return (
        <Route
            {...rest}
            render={
                props => Auth ?
                (<Component {...props} display={ display } Auth={ Auth } setAuth={setAuth} toggleSide={toggleSide} handleToggleSide={handleToggleSide}>
                    <Children toggleSide={toggleSide} handleToggleSide={handleToggleSide} />
                </Component>) :
                (<Redirect to={{ pathname:'/' }} />)
            }
        />
    );
}

export default PrivateRoute;
