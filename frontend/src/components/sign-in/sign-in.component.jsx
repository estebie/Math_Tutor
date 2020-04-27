import React from 'react';

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

const SignIn = () => (
   <div>
    <Form>
        <FormGroup row>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Email: </InputGroupText>
                    </InputGroupAddon>
                <Input type="email" name="email" id="email"/>
            </InputGroup>
        </FormGroup>
        <FormGroup row>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Password: </InputGroupText>
                    </InputGroupAddon>
                <Input type="password" name="password" id="password"/>
            </InputGroup>
        </FormGroup>
        <Row>
            <Col sm={12}>
                <p className="text-center text-md-right">Forgot your password?</p>
            </Col>
        </Row>
        <Button outline color="primary" size="sm" block>Login</Button>
        <Button outline color="danger" size="sm" block>Login with Google</Button>
    </Form>
   </div>
)


export default SignIn;