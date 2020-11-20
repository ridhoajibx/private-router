import React from 'react';
import { Button, Card, CardBody, Modal } from 'reactstrap';
import { formatMoney } from '../../variables/formatMoney';
import { dateFormat } from '../../variables/validator';

const ModalTransaction = (props) => {
    return (
        <Modal className="modal-dialog modal-dialog-centered modal-dialog-scrollable" isOpen={props.modal} toggle={() => props.setModal(false)}>
            <Card className="mb-0">
                <button type="button" className="close position-absolute text-white" onClick={() => props.setModal(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <CardBody>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Expense:</div>
                            <span>{props.data.title}</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Price:</div>
                            <span>Rp {formatMoney(props.data.cost)}</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Repeat:</div>
                            <span>{props.data.repeat ? props.data.repeat : 'One Time'}</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="font-weight-bold">Date:</div>
                            <span>{props.data.start_date ? dateFormat(props.data.start_date) : dateFormat(props.data.createdAt)}</span>
                        </div>
                    </div>
                    <Button className="float-right" size="sm" color="danger" onClick={() => props.setModal(false)}>Close</Button>
                </CardBody>
            </Card>
        </Modal >
    );
}

export default ModalTransaction;
