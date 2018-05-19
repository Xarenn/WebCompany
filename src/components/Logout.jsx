import React, { Component } from 'react';
import { clearAuth } from './Login/Auth'
import Home from './Home'
import { Redirect} from 'react-router-dom'


export default function() {

    clearAuth();
    window.location.reload();
    return (<Redirect to={"/"} />)

}