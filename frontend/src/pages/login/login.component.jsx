import React from 'react';

import './login.styles.scss';
import logo from '../../assets/Math_Coach_Logo_With_Ops.png';

const LoginPage = () => (
    <div className='login-container'>
        <div className='form-container'>
            <div className='logo-container' data-tilt data-tilt-glare="true" data-tilt-scale="1.1">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    </div>
)

export default LoginPage;