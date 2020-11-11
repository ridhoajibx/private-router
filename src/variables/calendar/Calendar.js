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

const group = {
    resources: ['Subscription'],
    orientation: 'vertical'
}
const resources = [
    {
        name: 'Subscription',
        data: [
            { text: 'Spotify', value: 1, color: '#79d70f' },
            { text: 'Netflix', value: 2, color: '#d32626' },
            { text: 'Youtube', value: 3, color: '#ff414d' },
            { text: 'Cigarette', value: 4, color: '#070d59' }
        ],
        field: 'subscriptionId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color'
    }
]

const Calendar = () => {
    const intl = useInternationalization();
    const [date, setDate] = useState(displayDate);
    const handleDateChange = useCallback(
        (event) => {
            setDate(event.value)
        },
        [setDate])
    return (
        <div>
            <Scheduler
                // group={group}
                // resources={resources}
                defaultView='month'
                data={data}
                date={date}
                onDataChange={handleDateChange}
                editable={false}
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
