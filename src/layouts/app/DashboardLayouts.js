import React from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header';

const DashboardLayouts = (props) => {
    return (
        <div>
            <Header Auth={props.Auth} display={props.display} setAuth={ props.setAuth } />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div style={{ padding: '30px' }}>
                    <h3>Dashboard Layouts</h3>
                </div>
                <Container className="my-4">
                    {props.children}
                </Container>
            </div>
        </div>
    );
}

export default DashboardLayouts;
