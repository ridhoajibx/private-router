import React from 'react';
import { Jumbotron, Button, Col, Row } from 'reactstrap';

const Jumbotron2 = (props) => {
    return (
        <Jumbotron className="jumbotron">
            <Row>
                <Col md='6' sx='12'>
                    <div className="jumbo-text d-flex flex-column justify-content-center">
                        <h1 style={{ color: "white", fontWeight: "bold" }}>Stress Free </h1>
                        <h1 style={{ color: "white", fontWeight: "bold" }}>Subscription </h1>
                        <h1 style={{ color: "white", fontWeight: "bold" }}>Manager.</h1>
                        <div>
                            <Button className="button">JOIN NOW</Button>
                        </div>
                    </div>
                </Col>
                <Col md='6' sx='12' className="hero-image"></Col>
            </Row>
        </Jumbotron>
    );
}

export default Jumbotron2;
