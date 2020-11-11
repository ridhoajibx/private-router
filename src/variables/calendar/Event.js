export const defaultDate = new Date("2020-10-09T00:00:00.000Z");
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();
const currentHours = new Date().getHours();

export const displayDate = new Date(Date.UTC(currentYear, currentMonth, currentDate, currentHours));
export const data = [
    {
        id: 1,
        title: 'Pay Cigarette',
        start: new Date("2020-10-27T11:30:00.000Z"),
        end: new Date("2020-10-27T12:00:00.000Z"),
        subscriptionId: 4,
        userId:  1,
        recurrenceRule: "FREQ=DAILY;UNTIL=2020-12-27T11:30:00.000Z",
    },
    {
        id: 2,
        title: 'Pay spotify',
        start: new Date("2020-10-09T11:30:00.000Z"),
        end: new Date("2020-10-09T13:00:00.000Z"),
        subscriptionId: 1,
        userId: 1,
        recurrenceRule: "FREQ=WEEKLY;UNTIL=2020-12-09T11:30:00.000Z",
    },
    {
        id: 3,
        title: 'Pay Netflix',
        start: new Date("2020-10-09T11:30:00.000Z"),
        end: new Date("2020-10-09T13:00:00.000Z"),
        subscriptionId: 2,
        userId: 1,
        recurrenceRule: "FREQ=MONTHLY;UNTIL=2021-01-09T11:30:00.000Z",
    },
    {
        // id: 4,
        title: 'Pay Youtube premium',
        start: new Date("2020-10-28T11:30:00.000Z"),
        end: new Date("2020-10-28T12:00:00.000Z"),
        subscriptionId: 3,
        userId: 1,
        recurrenceRule: "FREQ=YEARLY;UNTIL=2023-10-28T11:30:00.000Z",
    }
];