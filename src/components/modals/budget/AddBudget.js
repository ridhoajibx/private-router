import React, { useState, useEffect }from 'react';
import closeImg from '../../../assets/img/logo/close.svg';
import { Form, FormGroup, Input, Label, Modal, ModalBody } from 'reactstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { fetchExpense } from '../../../redux/expense/expenseAction';
import { fetchBudget } from '../../../redux/budget/budgetAction';
import axios from 'axios';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';

const AddBudget = ({ fetchBudget, modal, setModal, fetchExpense}) => {
    const [budget, setBudget] = useState({
        set_budget: "",
        limit_date: ""
    })

    useEffect(() => {
        fetchExpense()
    }, [fetchExpense])

    useEffect(() => {
        fetchBudget()
    }, [fetchBudget])

    const onSubmit = (e) => {
        e.preventDefault(e);
        let url = 'https://peaceful-gorge-77974.herokuapp.com/budget/add'
        let header = {
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem("jwtToken")
            }
        }

        let data = {
            set_budget: budget.set_budget,
            limit_date: budget.limit_date
        }

        
            axios.post(url, data, header)
                .then(response => {
                    const budget = response;
                    if (budget.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Great..',
                            text: 'Budget Added!'
                        })
                        fetchBudget()
                        setModal(false)
                    } else {
                        throw budget
                    }
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
        setBudget({
            amount: "",
            limit_date: ""
        })

    }

    return (
        <Modal isOpen={modal} toggle={() => setModal(false)}>
            <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                <h4 className="mb-0">Add budget</h4>
                <div style={{ cursor: 'pointer' }}>
                    <img style={{ width: '20px' }} onClick={() => setModal(false)} src={ closeImg } alt=".."/>
                </div>
            </div>
            <Form className='mt-2' onSubmit={onSubmit}>
                <ModalBody>
                    <FormGroup>
                        <Label for="set_budget">Amount</Label>
                        <Input 
                            type="number" 
                            name="set_budget" 
                            id="set_budget" 
                            placeholder="add amount" 
                            value={budget.set_budget}
                            onChange={(e) => setBudget({ ...budget, set_budget: e.target.value })}/>
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
        fetchBudget: () => dispatch(fetchBudget())
    }
}

export default connect(null, mapDispatchToProps)(AddBudget);
