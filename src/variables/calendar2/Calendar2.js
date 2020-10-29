import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@progress/kendo-theme-bootstrap/dist/all.css';

import { displayDate, sampleData } from './event-utc';
import {
    Scheduler,
    TimelineView,
    DayView,
    MonthView,
    DATA_ACTION,
    SchedulerItem,
    useSchedulerDataContext
} from '@progress/kendo-react-scheduler';
import { guid, Keys } from '@progress/kendo-react-common';

const CustomItem = (props) => {
    const [data, dispatchData] = useSchedulerDataContext();
    const handleKeyDown = React.useCallback(
        (event) => {
            switch (event.syntheticEvent.keyCode) {
                // 68 is "D" on a standard keyboard
                case Keys.backspace:
                    dispatchData({ type: DATA_ACTION.remove, series: props.isRecurring, dataItem: props.dataItem })
                    break;
                case 68:
                    dispatchData({ type: DATA_ACTION.create, series: props.isRecurring, dataItem: props.dataItem })
                    break;
                default:
                    if (props.onKeyDown) {
                        props.onKeyDown(event);
                    }
                    break;
            }
        },
        [
            dispatchData,
            props.isRecurring,
            props.dataItem,
            props.onKeyDown
        ]
    )

    return (<SchedulerItem {...props} onKeyDown={handleKeyDown} />)
}

const Calendar2 = () => {
    const [data, setData] = React.useState(sampleData);

    const handleDataChange = ({ created, updated, deleted }) => {
        console.log(created, updated, deleted);
        setData(old => old
            // Filter the deleted items
            .filter((item) => !deleted.some(current => current.id === item.id))
            // Find and replace the updated items
            .map((item) => updated.find(current => current.id === item.id) || item)
            // Add the newly created items and assign an `id`.
            .concat(created.map((item) => Object.assign({}, item, { id: guid() }))))
    }

    return (
        <Scheduler
            data={data}
            onDataChange={handleDataChange}
            item={CustomItem}
            editable={{
                add: true,
                edit: true,
                select: true,
                drag: true
            }}
            defaultDate={displayDate}
        >
            <TimelineView />
            <DayView numberOfDays={2} />
            <MonthView />
        </Scheduler>
    )
}

export default Calendar2;