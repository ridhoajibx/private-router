import React, { useState, useEffect } from 'react';
import closeImg from '../../../assets/img/logo/close.svg';
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row } from 'reactstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { fetchExpense } from '../../../redux/expense/expenseAction';
import { fetchBudget } from '../../../redux/budget/budgetAction';
import axios from 'axios';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { getTotalExpenses } from '../../../redux/expense/totalActions';

const AddExpense = ({ fetchExpense, modalEx, setModalEx, fetchBudget, getTotal }) => {
    const [expense, setExpense] = useState({
        title: "",
        cost: 0,
        repeat: "",
        start_date: "",
        limit_date: ""
    })

    useEffect(() => {
        fetchExpense()
    }, [fetchExpense])

    useEffect(() => {
        getTotal()
    }, [getTotal])

    useEffect(() => {
        fetchBudget()
    }, [fetchBudget])



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
            limit_date: expense.limit_date
        }


        axios.post(url, data, header)
            .then(response => {
                const expense = response;
                if (expense.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Great..',
                        text: 'Expense Added!'
                    })
                    getTotal()
                    fetchExpense()
                    fetchBudget()
                } else {
                    throw expense
                }
                setModalEx(false)
            })
            .catch(error => {
                const errorMsg = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'opps..',
                    text: errorMsg
                })
            })

    }

    const reset = (e) => {
        setExpense({
            title: "",
            cost: 0,
            repeat: "",
            start_date: "",
            limit_date: ""
        })

    }

    return (
        <Modal isOpen={modalEx} toggle={() => setModalEx(false)}>
            <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                <h4 className="mb-0">Add expense</h4>
                <div style={{ cursor: 'pointer' }}>
                    <img style={{ width: '20px' }} onClick={() => setModalEx(false)} src={closeImg} alt=".." />
                </div>
            </div>
            <Form className='mt-2' onSubmit={onSubmit}>
                <ModalBody>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="add title"
                            onChange={(e) => setExpense({ ...expense, title: e.target.value })}
                            value={expense.title} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cost">Cost</Label>
                        <Input
                            required
                            type="number"
                            name="cost"
                            id="cost"
                            placeholder="add cost"
                            onChange={(e) => setExpense({ ...expense, cost: e.target.value })}
                            value={expense.cost} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="repeat">Repeat</Label>
                        <Input
                            type="select"
                            name="repeat"
                            id="repeat"
                            onChange={(e) => setExpense({ ...expense, repeat: e.target.value })}
                            value={expense.repeat}>
                            <option value="">No Repeat</option>
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
                                    id="start_date"
                                    onChange={(e) => setExpense({ ...expense, start_date: e.target.value })}
                                    value={expense.start_date} />
                            </Col>
                            <Col sm="12" md="6">
                                <Label for="limit_date">Limit date</Label>
                                <Input
                                    type="date"
                                    name="limit_date"
                                    id="limit_date"
                                    onChange={(e) => setExpense({ ...expense, limit_date: e.target.value })}
                                    value={expense.limit_date} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        <button className="btn btn-primary btn-sm"><FaPlus /> Add Expenses</button>
                        <span className="btn btn-danger btn-sm" onClick={reset}>< FaTimes /> Reset</span>
                    </div>
                </ModalBody>
            </Form>
        </Modal>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchExpense: () => dispatch(fetchExpense()),
        fetchBudget: () => dispatch(fetchBudget()),
        getTotal: () => dispatch(getTotalExpenses()),
    }
}

export default connect(null, mapDispatchToProps)(AddExpense);
