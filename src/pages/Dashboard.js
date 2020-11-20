import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import ModalTransaction from '../components/modals/ModalTransaction';
import ChartsDashboard from '../components/charts/ChartsDashboard';
import { fetchExpense } from '../redux/expense/expenseAction';
import { connect } from 'react-redux';
import { formatMoney } from '../variables/formatMoney';

const Dashboard = ({ toggleSide, handleToggleSide, fetchExpense, expense }) => {
    const [modal, setModal] = useState(false);
    const [expenseData, setExpenseData] = useState([]);
    const [data, setData] = useState({});
    const handleShowmodal = (data) => {
        setData(data)
        setModal(!modal)
    }

    useEffect(() => {
        fetchExpense()
    }, [fetchExpense])

    useEffect(() => {
        if (expense.length) {
            let expenses = []
            expense.forEach(e => {
                expenses.push({
                    id: e.id,
                    title: e.title,
                    start_date: e.start_date ? e.start_date : e.createdAt,
                    limit_date: e.limit_date ? e.limit_date : e.createdAt,
                    cost: e.cost,
                    repeat: e.repeat,
                    createdAt: e.createdAt
                })
            })
            setExpenseData(expenses)
        }
    }, [expense]);

    return (
        <div className={`content-wrapper content-wrapper--${!toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={handleToggleSide}>
                {!toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Dashboard</h4>
            </span>

            <ChartsDashboard />

            {/* modal */}
            <ModalTransaction modal={modal} setModal={setModal} data={data} />

            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Expense History</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Expense</th>
                                        <th>Amount</th>
                                        <th className="text-right">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        expenseData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.title}</td>
                                                <td>Rp {formatMoney(item.cost)}</td>
                                                <td className="text-right"><button onClick={() => handleShowmodal(item)} className="btn btn-primary btn-sm">Details</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expense: state.expense.expenses,
        loading: state.expense.loading,
        error: state.expense.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExpense: () => dispatch(fetchExpense()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
