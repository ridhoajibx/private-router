import React from 'react';
import {
    Container
  } from 'reactstrap';
import Header from '../../components/Header';

const MainLayouts = (props) => {
    return (
        <div>
            <Header Auth={props.Auth} display={props.display} setAuth={ props.setAuth } />
            <Container className="my-4">
                {props.children}
            </Container>
        </div>
    );
}
export default MainLayouts;