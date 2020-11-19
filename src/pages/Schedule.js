import React, { useEffect, useState } from 'react';
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
import { connect } from 'react-redux';
import { fetchExpense } from '../redux';

const Schedule = ({expense, fetchExpense, toggleSide, handleToggleSide}) => {
    const [event, setEvent] = useState([]);
    const handleEventClick = (data) => {
        Swal.fire({
            icon: 'info',
            title: data.event.title,
            html: ` <b>Rp. ${formatMoney(data.event.extendedProps.cost)}</b> <br/>
                    Pembayaran: ${data.event.extendedProps.repeat}`,
            showConfirmButton: true
        })
    }

    useEffect(() => {
        fetchExpense()
    }, [fetchExpense])

    useEffect(() => {
        if(expense.length){
            let events = []
            expense.forEach(e => {
                events.push({
                    title: e.title,
                    rrule: {
                        freq: e.repeat ? e.repeat.toLowerCase() : 'daily',
                        dtstart: e.start_date ? e.start_date : e.createdAt, // will also accept '20120201T103000'
                        until: e.limit_date ? e.limit_date : e.createdAt, // will also accept '20120201'
                    },
                    extendedProps: {
                        cost: e.cost,
                        repeat: e.repeat ? e.repeat.toLowerCase() : 'One time'
                    }
                })
            })
            setEvent(events)
        }
    }, [expense]);

    return (
        <Container fluid>
            <div className={`content-wrapper content-wrapper--${!toggleSide ? 'show' : 'hide'}`}>
                <span className="toggle-btn" onClick={handleToggleSide}>
                    {!toggleSide ? <FaTimes /> : <FaBars />}
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
                                events={event}
                                eventClick={handleEventClick}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </div>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
