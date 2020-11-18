import React, { useState } from 'react';
import closeImg from '../../../assets/img/logo/close.svg';
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row } from 'reactstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddExpense = (props) => {
    const [expense, setExpense] = useState({
        title: "",
        cost: "",
        repeat: "",
        start_date: "",
        limit_date: ""
    })

    const onSubmit = (e) => {
        e.preventDefault(e);
        let url = 'https://peaceful-gorge-77974.herokuapp.com/expenses/add'
        let header = {
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem("jwtToken")
            }
        }


        let data = {
            title: expense.title,
            cost: expense.cost,
            repeat: expense.repeat,
            start_date: expense.start_date,
            start_date: expense.limit_date
        }

        if (expense.valid) {
            axios.put(url, data, header)
                .then(response => {
                    const password = response.data;
                    if (password.msg === "Password Changed!") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Great..',
                            text: password.msg
                        })
                    } else {
                        throw password
                    }
                })
                .catch(error => {
                    const errorMsg = error.response.data.msg
                    Swal.fire({
                        icon: 'error',
                        title: 'opps..',
                        text: errorMsg
                    })
                })
    }
}

    // const onHandler = (e) => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     let errors = state.errors
    //     let valid = state.valid
    // }
    return (
        <Modal isOpen={props.modalEx} toggle={() => props.setModalEx(false)}>
            <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                <h4 className="mb-0">Add expense</h4>
                <div style={{ cursor: 'pointer' }}>
                    <img style={{ width: '20px' }} onClick={() => props.setModalEx(false)} src={closeImg} alt=".." />
                </div>
            </div>
            <Form className='mt-2'>
                <ModalBody>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input 
                            type="text" 
                            name="title" 
                            id="title" 
                            placeholder="add title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cost">Cost</Label>
                        <Input 
                            type="number" 
                            name="cost" 
                            id="cost" 
                            placeholder="add cost" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="repeat">Repeat</Label>
                        <Input 
                            type="select" 
                            name="repeat" 
                            id="repeat">
                            <option value={null}>No Repeat</option>
                            <option value="DAILY">Daily</option>
                            <option value="WEEKLY">Weekly</option>
                            <option value="MONTHLY">Monthly</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm="12" md="6">
                                <Label for="start_date">Start date</Label>
                                <Input 
                                    type="date" 
                                    name="start_date" 
                                    id="start_date" />
                            </Col>
                            <Col sm="12" md="6">
                                <Label for="limit_date">Limit date</Label>
                                <Input 
                                    type="date" 
                                    name="limit_date" 
                                    id="limit_date" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        <button className="btn btn-primary btn-sm"><FaPlus /> Add Expenses</button>
                        <button className="btn btn-danger btn-sm">< FaTimes /> Reset</button>
                    </div>
                </ModalBody>
            </Form>
        </Modal>
    );
}

export default AddExpense;
