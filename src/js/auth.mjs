import { loginRequest } from './externalServices.mjs';
import {  setLocalStorage } from './utils.mjs';
import jwt_decode from 'jwt-decode';

const tokenKey = 'so-token';
export async function login(creds, redirect = '/') {
    try {
        const token = await loginRequest(creds);
        setLocalStorage(tokenKey, token);
        // because of the default arg provided above...if no redirect is provided send them Home.
        window.location = redirect;
    } catch (err) {
        //alertMessage(err.message.message);
    }
}

export function checkLogin() {
    let token = localStorage.getItem(tokenKey);
    if(isTokenValid(token)) {
        return token;
    } else {
        localStorage.removeItem(tokenKey);
        let path = window.location;
        window.location = `/login/index.html?redirect=${path.pathname}`;
    }
}

function isTokenValid(token) {
    if(token) {
        const decoded = jwt_decode(token);
        let date = new Date()
        if((decoded.exp * 1000) < date.getTime()) {
            console.log('Token is expired')
            return false;
        } else {
            console.log('Token is valid')
            return true;
        }
    } else {
        console.log('Token does not exist')
        return false;
    }
}