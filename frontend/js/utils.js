export function getToken() {
    return localStorage.getItem('token');
}
export function setToken(token) {
    localStorage.setItem('token', token);
}
export function redirectIfNotLoggedIn() {
    if (!getToken()) window.location.href = "login.html";
}
