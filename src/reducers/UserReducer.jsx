import React, { Component } from 'react';

export function UserData(state, action) {
    state = {
        email: getName(),
        passw: "",
        authenticated: IsAuth()
    }
        switch (action.type) {
        case 'USER_AUTH':
            if(action.payload.authenticated === false) {
                //Fake Auth next version
                action.payload.authenticated = true;
                state = action.payload;
                setName(action.payload.email);
                makeAuth()
            }
            return action.payload;
            break;
    }
    return state;
}

function IsAuth() {
    return !!localStorage.getItem("auth");
}

function makeAuth() {
    localStorage.setItem("auth", true);
}

function getName() {
    return localStorage.getItem("name");
}

function setName(name) {
    localStorage.setItem("name", name);
}