import React from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
// import '../../assets/scss/fund-template/calendar.scss';
import {
    Scheduler,
    AgendaView,
    DayView,
    WeekView,
    MonthView,
} from '@progress/kendo-react-scheduler';
import { data, defaultDate, displayDate } from './Event.js';

const group = {
    resources: ['Subscription'],
    orientation: 'vertical'
}
const resources = [
    {
        name: 'Subscription',
        data: [
            { text: 'Netflix', value: 1, color: '#79d70f' },
            { text: 'Spotify', value: 2, color: '#d32626' },
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
    return (
        <div>
            <Scheduler
                group={group}
                resources={resources}

                data={data}
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
