import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const DashboardLayouts = (props) => {
    return (
        <div>
            <Header Auth={props.Auth} display={props.display} setAuth={ props.setAuth } />
            <div className="main">
                <Sidebar />
                <div className="my-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayouts;
