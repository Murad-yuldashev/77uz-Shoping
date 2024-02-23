export function isValid(login, password) {
    return login.length >= 5 && password.length >= 8
}