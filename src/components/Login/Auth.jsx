const API = "localhost:3333/api"
const key = "Secret_Key"

export function Authenticate(user) {
    return {
        type:'USER_AUTH', 
        payload:user
    }; 
}

export function Login(user) {
    return {
        type:'USER_LOGIN', 
        payload:user.email
    }; 
}

export const IsAuth = () =>  {
    let token = " " + localStorage.getItem('at')
    if (localStorage.getItem('at') === 'true') {
        return true; 
    }else {
        return false;
     }
}

export function makeAuth(email, passw) {
    let mail = "" + email; 
    if (mail == "dryndy") {
        localStorage.setItem("at", true); 
        return true; 
    }
    else {
    localStorage.setItem("at", false); 
    return false; 
 }
}

export function getEmail() {
    return localStorage.getItem("email"); 
}

export function setEmail(email) {
    localStorage.setItem("email", email); 
}

export function clearAuth() {
    localStorage.clear()
}