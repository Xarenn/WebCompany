import React, { Component } from 'react';
import { getEmail, makeAuth, IsAuth, setEmail } from '../components/Login/Auth'

export function UserData(state, action) {
    state = {
        email: getEmail(),
        passw: "",
        authenticated: IsAuth()
    }
        switch (action.type) {
        case 'USER_LOGIN':
            let email = ""+action.payload.email;
            if(!!action.payload.email && email.length > 0) {
                setEmail(action.payload.email);
            }
        case 'USER_AUTH':
            if(state.authenticated === false) {
                let auth = makeAuth(action.payload.email, action.payload.passw)
                action.payload.authenticated = auth;
            }
            return action.payload;
            break;
    }
    return state;
}
