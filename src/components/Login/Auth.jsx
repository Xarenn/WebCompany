import axios from 'axios'

const API = "http://127.0.0.1:8081/api"

export function Authenticate(user) {
    return {
        type:'USER_AUTH', 
        payload: user
    }; 
}

export function Login(user) {
    return {
        type:'USER_LOGIN', 
        payload: user.email
    }; 
}

export const IsAuth = () =>  {
    if (localStorage.getItem("at") === "true") {
        return true; 
    }
    if(localStorage.getItem("at") === "false") {
        return false;
    }
    else {
        return "";
    }
}
/*
{
    "password": "password",
    "email": "dryndy@gmail.com"
}*/
export async function makeAuth(email, passw) {
    let token = "";
    try {
    const response = await axios.get(API+"/auth", {
        params: {
        "password": passw,
        "email": email
        }
    });
    if(response.data !== "Auth failed") {
        token = response.data.substring(5);
        setEmail(email);
        localStorage.setItem("token", token);
        localStorage.setItem("at", "true");
    }
    }catch(error) {
        localStorage.setItem("token", "");
        localStorage.setItem("at", "false");
        console.log(error);
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

export function validatePassword() {
    //validate with axios->
    return true;
}