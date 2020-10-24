import React from 'react';
import { Container } from 'reactstrap';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const DashboardLayouts = (props) => {
    console.log(props);
    return (
        <div>
            <Header Auth={props.Auth} display={props.display} setAuth={ props.setAuth } />
            <Sidebar toggleSide={ props.toggleSide } />
            <div fluid className="my-4">
                {props.children}
            </div>
        </div>
    );
}

export default DashboardLayouts;
