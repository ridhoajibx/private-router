import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Card, CardBody, CardGroup, Col, Row } from 'reactstrap';
import TableDummy from '../components/budget/TableDummy';
import AddBudget from '../components/modals/budget/AddBudget';
import AddExpense from '../components/modals/budget/AddExpense';

const data = [
    {
        title: 'Nonton',
        cost: '20000',
        repeat: 'none',
        startdate: '15/11/2020',
        limitdate: '15/11/2020'
    },
    {
        title: 'Belanja',
        cost: '100000',
        repeat: 'MONTHLY',
        startdate: '15/11/2020',
        limitdate: '15/11/2020'
    },
    {
        title: 'Traktir',
        cost: '30000',
        repeat: 'none',
        startdate: '15/11/2020',
        limitdate: '15/11/2020'
    },
    {
        title: 'Book',
        cost: '30000',
        repeat: 'none',
        startdate: '15/11/2020',
        limitdate: '15/11/2020'
    },
    {
        title: 'Jalan',
        cost: '300000',
        repeat: 'none',
        startdate: '15/11/2020',
        limitdate: '15/11/2020'
    },
    {
        title: 'Rental Mobil',
        cost: '40000',
        repeat: 'none',
        startdate: '15/11/2020',
        limitdate: '15/11/2020'
    }
]

const Budget = (props) => {
    const [modal, setModal] = useState(false)
    const [modalEx, setModalEx] = useState(false)

    const onClickModalBudget = () => {
        setModal(!modal)
    }
    const onClickModalEx = () => {
        setModalEx(!modalEx)
    }

    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Budget</h4>
            </span>

            <Row>
                <Col>
                    <CardGroup className="mt-3">
                        <Card>
                            <CardBody className="text-center">
                                <h4 className="text-primary">
                                    Rp. 10.000.000,00
                                </h4>
                                <h6>INCOME</h6>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className="text-center">
                                <h4 className="text-primary">
                                    Rp. 9.680.000,00
                                </h4>
                                <h6>BUDGET</h6>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className="text-center">
                                <h4 className="text-primary">
                                    Rp. 320.000,00
                                </h4>
                                <h6>EXPENSES</h6>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <CardGroup>
                        <Card>
                            <CardBody className="text-center" style={{ alignItems: 'center' }}>
                                <button className="btn btn-primary" onClick={() => onClickModalBudget()} >< AiOutlinePlus /> Add Budget</button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className="text-center" style={{ alignItems: 'center' }}>
                                <button className="btn btn-primary" onClick={() => onClickModalEx()}>< AiOutlinePlus /> Add Expenses</button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Card className="p-4">
                        <span>
                            <h4 style={{ marginLeft: '10px', marginBottom: '15px' }}>History</h4>
                        </span>
                        {/* <TableComponent /> */}

                        <TableDummy expense={data} />
                    </Card>
                </Col>
            </Row>
            <AddBudget modal={modal} setModal={setModal} />
            <AddExpense modalEx={modalEx} setModalEx={setModalEx} />
        </div>
    );
}

export default Budget;
