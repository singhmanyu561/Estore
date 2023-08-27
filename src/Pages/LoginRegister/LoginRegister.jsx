import React from 'react';
import './LoginRegister.css';
import Login from './Login/Login';
import Register from './Register/Register';

const LoginRegister = () => {
    return(
        <div className="LoginRegister">
            <Register/>
            <Login/>
        </div>
    );
}

export default LoginRegister;