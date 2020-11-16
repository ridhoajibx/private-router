import React from 'react';
import closeImg from '../../../assets/img/logo/close.svg';
import { Form, FormGroup, Input, Label, Modal, ModalBody } from 'reactstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

const AddBudget = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={() => props.setModal(false)}>
            <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                <h4 className="mb-0">Add budget</h4>
                <div style={{ cursor: 'pointer' }}>
                    <img style={{ width: '20px' }} onClick={() => props.setModal(false)} src={ closeImg } alt=".."/>
                </div>
            </div>
            <Form className='mt-2'>
                <ModalBody>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="number" name="email" id="amount" placeholder="add amount" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="expired">Expired</Label>
                        <Input type="date" name="expired" id="expired" />
                    </FormGroup>
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        <button className="btn btn-primary btn-sm">< AiOutlinePlus /> Add Budget</button>
                        <button className="btn btn-danger btn-sm">< FaTimes /> Reset</button>
                    </div>
                </ModalBody>
            </Form>
        </Modal>
    );
}

export default AddBudget;
