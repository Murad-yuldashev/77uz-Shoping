export function isValid(login, password) {
    return login.length === 12 && password.length >= 8
}