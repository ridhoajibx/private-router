import React, { useState }from 'react';
import closeImg from '../../../assets/img/logo/close.svg';
import { Form, FormGroup, Input, Label, Modal, ModalBody } from 'reactstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';

const AddBudget = (props) => {
    const [budget, setBudget] = useState({
        amount: "",
        limit_date: ""
    })

    const onSubmit = (e) => {
        e.preventDefault(e);
    }

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
                        <Input 
                            type="number" 
                            name="amount" 
                            id="amount" 
                            placeholder="add amount" 
                            value={budget.amount}
                            onChange={(e) => setBudget({ ...budget, amount: e.target.value })}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="expired">Expired</Label>
                        <Input 
                            type="date" 
                            name="limit_date" 
                            id="limit_date" 
                            value={budget.limit_date}
                            onChange={(e) => setBudget({ ...budget, limit_date: e.target.value })}/>
                    </FormGroup>
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        <button className="btn btn-primary btn-sm"><FaPlus /> Add Budget</button>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={(e) => setBudget({ ...budget, amount: "", limit_date: ""})}
                            ><FaTimes /> Reset</button>
                    </div>
                </ModalBody>
            </Form>
        </Modal>
    );
}


export default connect()(AddBudget);
