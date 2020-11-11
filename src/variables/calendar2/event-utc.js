const baseData = [
    {
        "TaskID": 1,
        "OwnerID": 3,
        "Title": "Netflix",
        "Description": "",
        "StartTimezone": null,
        "Start": "2013-06-05T15:00:00.000Z",
        "End": "2013-06-05T16:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": "FREQ=WEEKLY;BYDAY=WE",
        "RecurrenceID": null,
        "RecurrenceException": null,
        "isAllDay": false
    },
    {
        "TaskID": 2,
        "OwnerID": 3,
        "Title": "Spotify",
        "Description": "",
        "StartTimezone": null,
        "Start": "2013-06-07T07:00:00.000Z",
        "End": "2013-06-07T08:30:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": "",
        "RecurrenceID": null,
        "RecurrenceException": null,
        "isAllDay": false
    }
];

export const customModelFields = {
    id: 'TaskID',
    title: 'Title',
    description: 'Description',
    start: 'Start',
    end: 'End',
    recurrenceRule: 'RecurrenceRule',
    recurrenceId: 'RecurrenceID',
    recurrenceExceptions: 'RecurrenceException',
};

const currentYear = new Date().getFullYear();
const parseAdjust = (eventDate) => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const displayDate = new Date(Date.UTC(currentYear, 5, 24));

export const sampleData = baseData.map(dataItem => (
    {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.isAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceExceptions: dataItem.RecurrenceException,

        roomId: dataItem.RoomID,
        ownerID: dataItem.OwnerID,
        personId: dataItem.OwnerID
    }
));

export const sampleDataWithResources = baseData.map(dataItem => (
    {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.isAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceExceptions: dataItem.RecurrenceException,
        roomId: randomInt(1, 2),
        personId: randomInt(1, 2),
    }
));

export const sampleDataWithCustomSchema = baseData.map(dataItem => (
    {
        ...dataItem,
        Start: parseAdjust(dataItem.Start),
        End: parseAdjust(dataItem.End),
        PersonIDs: randomInt(1, 2),
        RoomID: randomInt(1, 2),
    }
));