import React, { Component } from 'react';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants.js';
import { Redirect, useNavigate } from 'react-router-dom'

class OAuth2RedirectHandler extends Component {
    const navigation=useNavigate();
    getUrlParameter(name) {
        name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    render() {        
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if(token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            localStorage.setItem(REFRESH_TOKEN, null);
            return navigation('/')
        } 

    }
}

export default OAuth2RedirectHandler;