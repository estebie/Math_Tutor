import React, {useState} from 'react';
import {emailSignInStart} from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

import { 
    Button,
    Col,
    Form, 
    FormGroup,
    InputGroup,  
    InputGroupText, 
    InputGroupAddon, 
    Input,
    Row
 } from 'reactstrap';

const SignIn = ({emailSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email:'', password:''});
    const{email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        console.log('submitting');
        console.log(email + password);
        emailSignInStart(email, password);
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
                            type="email" 
                            name="email"
                            placeholder="Email"
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
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormGroup>
                <Row>
                    <Col sm={12}>
                        <p className="text-center text-md-right">Forgot your password?</p>
                    </Col>
                </Row>
                <Button type='submit' outline color="primary" size="sm" block>Login</Button>
                <Button outline color="danger" size="sm" block>Login with Google</Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})


export default connect(null, mapDispatchToProps)(SignIn);