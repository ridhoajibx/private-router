import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const DashboardLayouts = (props) => {
    return (
        <div>
            <Header display={props.display} />
            <Sidebar toggleSide={ props.toggleSide } />
            <div className="my-4">
                {props.children}
            </div>
        </div>
    );
}

export default DashboardLayouts;
