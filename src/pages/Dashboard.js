import React from 'react';
import {
    dashboard24HoursPerformanceChart,
} from "../variables/charts";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const Dashboard = (props) => {
    console.log(props, "cek props");
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Dashboard</h4>
            </span>

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
                                    <tr>
                                        <td>Netflix</td>
                                        <td>$105,70</td>
                                        <td className="text-right"><Button size='sm' color="primary">Details</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Spotify</td>
                                        <td>$56,78</td>
                                        <td className="text-right"><Button size='sm' color="primary">Details</Button></td>
                                    </tr>
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
