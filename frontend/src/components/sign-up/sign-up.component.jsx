import React, {useState} from 'react';
import {signUpStart} from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'

import { 
    Button,
    Form, 
    FormGroup,
    InputGroup,  
    InputGroupText, 
    InputGroupAddon, 
    Input,
 } from 'reactstrap';

const SignUp = ({signUpStart}) => {

    const [userCredentials, setCredentials] 
        = useState({
            email:'', 
            password:'', 
            confirm_password:'', 
            dob:'',
            first_name:'',
            last_name:''
        });
    const [isPasswordValidated, setPasswordValidated] = useState(false);

    const{email, password, confirm_password, dob, first_name, last_name} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        setPasswordValidated(password !== confirm_password);
        const form = {
            email,
            password,
            dob,
            first_name,
            last_name
        }

        if (password === confirm_password) {
            signUpStart(form);
        }
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faUser} /></InputGroupText>
                            </InputGroupAddon>
                        <Input 
                            type="text" 
                            name="first_name" 
                            id="first_name"
                            placeholder="First Name"
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faUser} /></InputGroupText>
                            </InputGroupAddon>
                        <Input 
                            type="text" 
                            name="last_name" 
                            id="last_name"
                            placeholder="Last Name"
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faUser} /></InputGroupText>
                            </InputGroupAddon>
                        <Input 
                            type="email" 
                            name="email" 
                            id="login_email"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faBirthdayCake} /></InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="date"
                                name="dob"
                                id="dob"
                                placeholder="date placeholder"
                                onChange={handleChange}
                            />
                    </InputGroup>
                </FormGroup>
                <FormGroup row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faKey} /></InputGroupText>
                            </InputGroupAddon>
                        <Input 
                            type="password" 
                            name="password" 
                            id="login_password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faKey} /></InputGroupText>
                            </InputGroupAddon>
                        <Input 
                            type="password" 
                            name="confirm_password" 
                            id="confirm_password"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            invalid={isPasswordValidated}
                        />
                    </InputGroup>
                </FormGroup>
                <Button outline color="success" size="sm" block>Sign Up</Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (form) => dispatch(signUpStart(form))
})

export default connect(null, mapDispatchToProps)(SignUp);