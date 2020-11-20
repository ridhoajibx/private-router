import React, { useEffect } from 'react';
import { getTotalExpenses } from '../../redux/expense/totalActions';

import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { connect, useSelector } from 'react-redux';

const ChartsDashboard = ({ getTotal }) => {
    const total = useSelector(state => state.total.totalExpenses)
    
    useEffect(() => {
        getTotal()
    }, [getTotal]);

    const dashboard24HoursPerformanceChart = {
        data: (canvas) => {
            return {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                datasets: [
                    {
                        label: "Total Expenses",
                        borderColor: "#7971EA",
                        backgroundColor: "#7971EA",
                        pointRadius: 4,
                        pointHoverRadius: 4,
                        borderWidth: 3,
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, total.total?total.total:0, 0],
                    },
                ],
            };
        },
        options: {
            legend: {
                display: true,
            },

            tooltips: {
                enabled: true,
            },

            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontColor: "#9f9f9f",
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 20
                        },
                        gridLines: {
                            drawBorder: true,
                            zeroLineColor: "#ccc",
                            color: "rgba(255,255,255,0.05)",
                        },
                    },
                ],

                xAxes: [
                    {
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "transparent",
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: "#9f9f9f",
                        },
                    },
                ],
            },
        },
    };
    return (
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
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTotal: () => dispatch(getTotalExpenses()),
    }
}

export default connect(null, mapDispatchToProps) (ChartsDashboard);
