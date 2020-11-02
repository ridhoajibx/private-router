import React, { useState } from 'react';
import {
    dashboard24HoursPerformanceChart,
} from "../variables/charts";
import { dataTables } from '../variables/data-tables';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import ModalTransaction from '../components/modals/ModalTransaction';

const Dashboard = (props) => {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});
    const handleShowmodal = (data) => {
        setData(data)
        setModal(!modal)
    }
    console.log(props, "cek props");
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Dashboard</h4>
            </span>

            {/* modal */}
            <ModalTransaction modal={modal} setModal={setModal} data={data} />

            <Row className="py-4">
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h5">Last month spending</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Line
                                data={dashboard24HoursPerformanceChart.data}
                                options={dashboard24HoursPerformanceChart.options}
                                width={400}
                                height={100}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Transaction</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Subscription</th>
                                        <th>Amount</th>
                                        <th className="text-right">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataTables.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.subscription}</td>
                                                <td>Rp {item.price}</td>
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

export default Dashboard;
