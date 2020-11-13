import React from 'react';
import { Button, Card, CardBody, CardText, Modal } from 'reactstrap';

const ModalExpense = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={() => props.setModal(false)}>
            <Card className="mb-0">
                <button type="button" class="close position-absolute text-white" onClick={() => props.setModal(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <CardBody>
                    <CardText>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Subscription:</div>
                            <span>Bayar makan</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Price:</div>
                            <span>10000</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Date payment:</div>
                            <span>Pay date</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Status:</div>
                            <span>Status</span>
                        </div>
                    </CardText>
                    <Button className="float-right" size="sm" color="danger" onClick={() => props.setModal(false)}>Close</Button>
                </CardBody>
            </Card>
        </Modal >
    );
}

export default ModalExpense;
