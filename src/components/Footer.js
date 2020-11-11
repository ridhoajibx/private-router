import React from 'react';
import {Button, Row,Col} from 'reactstrap';

const Footer3  = (props) => {
    return (
        <div className="footer3">
         <Row>
                <Col>
                    <div className="jumbo-text d-flex flex-column justify-content-center">
                        <h3 style={{ color: "white", fontWeight: "bold" }}>So what are you waiting for? </h3>
                        <div>
                            <Button className="button">JOIN NOW</Button>
                        </div>
                    </div>
                </Col>
                <Col md='6' sx='12' className="hero-image"></Col>
            </Row>
            <p>2020 | Subsit</p>
      </div>
      

        );
      }

export default Footer3;