import React,  {Component }from 'react'; 
import {getEmail, makeAuth, IsAuth, getToken, setEmail } from '../components/Login/Auth'
import { isInvoice } from '../components/Account/InvoiceUtil';

export function UserData(state, action) {
    state =  {
        email: getEmail(), 
        passw: "", 
        authenticated: IsAuth(),
        token: getToken(),
        idInvoice: null
    }
        switch (action.type) {
        case 'USER_LOGIN':
            let email = "" + action.payload.email; 
            if ( !!action.payload.email && email.length > 0) {
                setEmail(action.payload.email); 
            }
            return action.payload;

        case 'USER_AUTH':
            if (state.authenticated === "" || state.authenticated === false) {
                makeAuth(action.payload.email, action.payload.passw);
            }
            return action.payload; 

        case 'USER_INVOICE':
            if(isInvoice(action.payload.idInvoice)) {
                state.idInvoice = action.payload.idInvoice;
            }
            return action.payload; 
    }
    return state; 
}