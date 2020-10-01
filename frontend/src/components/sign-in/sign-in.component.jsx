import React, {useState} from 'react';
import { emailSignInStart, clearUserError } from '../../redux/user/user.actions';
import userActionTypes from "../../redux/user/user.types";
import { selectUserError } from '../../redux/user/user.selector';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

import { 
    Alert,
    Button,
    Col,
    Form, 
    FormGroup,
    InputGroup,  
    InputGroupText, 
    InputGroupAddon, 
    Input,
    Row,
    Spinner
 } from 'reactstrap';

const SignIn = ({ emailSignInStart, error, clearUserError }) => {
    const [userCredentials, setCredentials] = useState({email:'', password:''});
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        console.log('submitting');
        console.log(email + password);
        setLoading(true);
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

    const onDismiss = () => {
        clearUserError();
        setVisible(false);
    }
    
    if (userActionTypes.SIGN_IN_FAILURE === error && visible === false) {
        setLoading(false);
        setVisible(true);
    }

    return (   
        <div>
            <Form onSubmit={handleSubmit}>
                <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    Login failed. Please try again.
                </Alert>
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
                { loading ?                
                    <div>
                        <Spinner type="grow" color="primary"/>
                        <Spinner type="grow" color="primary"/>
                        <Spinner type="grow" color="primary"/>
                        <Spinner type="grow" color="primary"/>
                        <Spinner type="grow" color="primary"/>
                        <Spinner type="grow" color="primary"/>
                    </div> 
                    : 
                    <div>
                        <Button type='submit' outline color="primary" size="sm" block>Login</Button>
                        <Button outline color="danger" size="sm" block>Login with Google</Button>
                    </div>
                }
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password)),
    clearUserError: () => dispatch(clearUserError())
})

const mapStateToProps =  createStructuredSelector({
    error: selectUserError
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);