<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
import FullCalendar from '@fullcalendar/react'
import rrulePlugin from '@fullcalendar/rrule'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2'
import { Card, CardBody, Col, Container } from 'reactstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/scss/fund-template/calendar.scss';
import { formatMoney } from '../variables/formatMoney';
<<<<<<< HEAD

const Schedule = (props) => {
=======
import { connect } from 'react-redux';
import { fetchExpense } from '../redux';

const Schedule = (props) => {
    const [data, setData] = useState([]);
    const [event, setEvent] = useState([]);
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
    const events = [
        {
            title: 'Bayar rokok',
            rrule: {
                freq: 'daily',
                dtstart: '2020-11-01', // will also accept '20120201T103000'
                until: '2020-11-01' // will also accept '20120201'
            },
            extendedProps: {
                cost: 10000,
                repeat: 'daily'
            }
        },
        {
            title: 'Bayar sarapan',
            rrule: {
                freq: 'daily',
                dtstart: '2020-11-08', // will also accept '20120201T103000'
                until: '2020-11-14' // will also accept '20120201'
            },
            extendedProps: {
                cost: 10000,
                repeat: 'daily'
            }
        },
        {
            title: 'Bayar Netflix',
            rrule: {
                freq: 'monthly',
                dtstart: '2020-11-01', // will also accept '20120201T103000'
                until: '2021-01-01' // will also accept '20120201'
            },
            extendedProps: {
                cost: 75000,
                repeat: 'monthly'
            }
        },
    ]
<<<<<<< HEAD
    
=======
 
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
    const handleEventClick = (data) => {
        Swal.fire({
            icon: 'info',
            title: data.event.title,
            html: ` <b>Rp. ${formatMoney(data.event.extendedProps.cost)}</b> <br/>
                    Pembayaran: ${data.event.extendedProps.repeat}`,
            showConfirmButton: true
        })
    }
<<<<<<< HEAD
=======

    useEffect(() => {
        props.fetchExpense()
    }, [])

    useEffect(() => {
        setData({ data: props.expense })
    }, [props.expense]);
    
    console.log(data, 'ini data');
    console.log(event, 'ini event');
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
    return (
        <Container fluid>
            <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
                <span className="toggle-btn" onClick={props.handleToggleSide}>
                    {!props.toggleSide ? <FaTimes /> : <FaBars />}
                    <h4>Schedule</h4>
                </span>
                <Col lg='12'>
                    <Card>
                        <CardBody>
                            <FullCalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, rrulePlugin]}
                                headerToolbar={{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                                }}
                                initialView="dayGridMonth"
                                weekends={true}
                                events={events}
                                eventClick={handleEventClick}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </div>
        </Container>
    );
}

<<<<<<< HEAD
export default Schedule;
=======
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
