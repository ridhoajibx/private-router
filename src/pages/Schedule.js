import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import rrulePlugin from '@fullcalendar/rrule'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2'
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/scss/fund-template/calendar.scss';

const Schedule = (props) => {
    const [events, setEvents] = useState([
        {
            title: 'event 1',
            start: '2020-11-04',
            end: '2020-11-07',
            extendedProps: {
                department: '10000'
            }
        },
        {
            title: 'event 2',
            start: '2020-11-08',
            end: '2020-11-08',
            extendedProps: {
                department: '10000'
            }
        },
        {
            title: 'event 1',
            start: '2020-11-10',
            end: '2020-11-10',
            extendedProps: {
                department: '20000'
            }
        },
        {
            title: 'event 1',
            start: '2020-11-11',
            end: '2020-11-12',
            extendedProps: {
                department: '30000'
            }
        }
    ])
    const handleEventClick = (data) => {
        Swal.fire({
            icon: 'question',
            title: data.event.title,
            text: `Rp ${data.event.extendedProps.department}`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <Container fluid>
            <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
                <span className="toggle-btn" onClick={props.handleToggleSide}>
                    {!props.toggleSide ? <FaTimes /> : <FaBars />}
                    <h4>Schedule</h4>
                </span>
                <Row className="my-2">
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
                </Row>
            </div>
        </Container>
    );
}

export default Schedule;
