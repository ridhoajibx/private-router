const validEmailRegex = (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);

export const validateEmail = (email) => {
    if (validEmailRegex.test(email)) {
        return true
    }
    return false
}