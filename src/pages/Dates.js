import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Col, Container, Row } from 'reactstrap';
import Calendar from '../variables/calendar/Calendar';

const Dates = (props) => {
    return (
        <Container fluid>
            <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
                <span className="toggle-btn" onClick={props.handleToggleSide}>
                    { !props.toggleSide ? <FaTimes /> : <FaBars /> }
                    <h4>Schedule</h4>
                </span>
                <Row className="my-2">
                    <Col lg='12'>
                        <Calendar />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Dates;
