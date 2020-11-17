import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardGroup, CardBody } from 'reactstrap';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const items = [
    {
        id: '1',
        src: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
        Next_Payment: 'June 29 2020',
        Duration: 'Monthly',
        Cost: '149.000',
        altText: 'Slide 1',
        caption: 'NETFLIX'
    }
];

const Subscription = (props) => {

    const {
        className
    } = props;
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({}); //hooks
    const handleShowmodal = (items) => {
        setData(items)
        setModal(!modal)
    };
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Subscription</h4>
                <br></br>
                <br></br>
                <br></br>
            </span>

            <CardGroup>
                <Card>
                    <CardBody>
                        <h1 style={{ textAlign: 'center', color: 'purple' }}>1</h1>
                        <br></br>
                        <h5 style={{ textAlign: 'center' }}>Total Active Subscription</h5>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h1 style={{ textAlign: 'center', color: 'purple' }}>1</h1>
                        <br></br>
                        <h5 style={{ textAlign: 'center', }}>Paid</h5>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h1 style={{ textAlign: 'center', color: 'purple' }}>1</h1>
                        <br></br>
                        <h5 style={{ textAlign: 'center' }}>Pending</h5>
                    </CardBody>
                </Card>
            </CardGroup>
            <br></br>
            <br></br>
            <Card>
                <CardBody>
                    <Row>
                        {items.map((image, i) =>
                            <Col key={i} md={4}>
                                <img style={{ backgroundColor: "#e8e8e8" }} src={image.src} onClick={() => handleShowmodal(image)} alt='...' />
                                <br></br>
                                <br></br>
                            </Col>
                        )}

                        <Modal isOpen={modal} toggle={() => setModal(false)} className={className}>
                            <ModalHeader>{data.caption}</ModalHeader>
                            <ModalBody>
                                <img style={{ backgroundColor: "#e8e8e8" }} src={data.src} alt='...' />
                                <br></br>
                                <br></br>
                                <h6> Next Payment : {data.Next_Payment}</h6>
                                <h6> Duration : {data.Duration}</h6>
                                <h6> Cost : {data.Cost}</h6>
                                {data.description}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={() => setModal(false)}>Unsubscript</Button>
                            </ModalFooter>
                        </Modal>
                    </Row>

                </CardBody>
            </Card>
        </div>


    );
}

export default Subscription;
