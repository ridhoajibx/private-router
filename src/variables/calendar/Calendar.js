import React, { useCallback, useState } from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import '../../assets/scss/fund-template/calendar.scss';
import {
    Scheduler,
    AgendaView,
    DayView,
    WeekView,
    MonthView,
} from '@progress/kendo-react-scheduler';
import { data, defaultDate, displayDate } from './Event.js';
import { useInternationalization } from '@progress/kendo-react-intl';


const Calendar = () => {
    const intl = useInternationalization();
    const [date, setDate] = useState(displayDate);
    const [item, setItem] = useState({});
    const [modal, setModal] = useState(false);
    const handleDateChange = useCallback(
        (event) => {
            setDate(event.value)
        },
        [setDate])
    return (
        <div>
            <Scheduler
                defaultView='month'
                data={data}
                date={date}
                // onDataChange={handleDateChange}
                // editable={true}
                defaultDate={displayDate}

                timezone={"Etc/UTC"}
            >
                <AgendaView />
                <DayView />
                <WeekView />
                <MonthView />
            </Scheduler>
        </div>
    );
}

export default Calendar;
