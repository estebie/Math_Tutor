import React from 'react';

import './login.styles.scss';
import logo from '../../assets/Math_Coach_Logo_With_Ops.png';
import SignIn from '../../components/sign-in/sign-in.component';

const LoginPage = () => (
    <div className='login-form-wrapper'>
        <div className='login-form-container'>
            <div className='logo-container'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='form-container'>
            <SignIn></SignIn> 
            </div>
        </div>
    </div>
)

export default LoginPage;