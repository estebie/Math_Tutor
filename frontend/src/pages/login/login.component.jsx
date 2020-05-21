import React, {useState} from 'react';

import './login.styles.scss';
import logo from '../../assets/Math_Coach_Logo_With_Ops.png';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { 
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';

import classnames from 'classnames';
const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className='login-form-wrapper'>
            <div className='login-form-container'>
                <div className='logo-container'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='form-container'>
                    <Nav tabs className='float-right'>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Sign-in
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Sign-up
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className='tab-container'>
                        <TabPane tabId="1">
                            <SignIn></SignIn>
                        </TabPane>
                        <TabPane tabId="2">
                            <SignUp></SignUp>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;