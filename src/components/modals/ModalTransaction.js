import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, Modal } from 'reactstrap';

const ModalTransaction = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={() => props.setModal(false)}>
            <Card className="mb-0">
                <button type="button" class="close position-absolute text-white" onClick={() => props.setModal(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <CardImg className="bg-dark card-img-top" src={props.data.image}></CardImg>
                <CardBody>
                    <CardText>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Subscription:</div>
                            <span>{props.data.subscription}</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Price:</div>
                            <span>${props.data.price}</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Date payment:</div>
                            <span>{props.data.date}</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Status:</div>
                            <span>{props.data.statuses}</span>
                        </div>
                    </CardText>
                    <Button className="float-right" size="sm" color="danger" onClick={() => props.setModal(false)}>Close</Button>
                </CardBody>
            </Card>
        </Modal >
    );
}

export default ModalTransaction;
