import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';

function TableDummy({ expense }) {
    return (
        <Row className="mt-4">
            <Col md="12">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle tag="h4">Transaction</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th>Title</th>
                                    <th>Cost</th>
                                    <th>Repeat</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th className="text-right">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    expense.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.title}</td>
                                            <td>Rp {item.cost}</td>
                                            <td>{item.repeat}</td>
                                            <td>{item.startdate}</td>
                                            <td>{item.limitdate}</td>
                                            <td className="text-right"><button className="btn btn-primary btn-sm">Edit</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default TableDummy
