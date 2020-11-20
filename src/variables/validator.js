const validEmailRegex = (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);

export const validateEmail = (email) => {
    if (validEmailRegex.test(email)) {
        return true
    }
    return false
}

export const dateFormat = (date) => {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
    var d = new Date(date),
        day = d.getDate(),
        monthIndex = d.getMonth(),
        year = d.getFullYear();
    return `${day}, ${monthNames[monthIndex]} ${year}`;
}

export const dateOnly = (date) => {
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ];
    var d = new Date(date),
        monthIndex = d.getMonth()
    return `${monthNames[monthIndex]}`;
}