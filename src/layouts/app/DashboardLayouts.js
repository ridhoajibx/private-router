import React from 'react';
import Header from './components/Header';

const DashboardLayouts = (props) => {
    return (
        <div>
            <Header Auth={props.Auth} display={props.display} setAuth={ props.setAuth } />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div style={{ padding: '30px' }}>
                    <h3>Dashboard Layouts</h3>
                </div>
                <div style={{ padding: '30px' }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayouts;
