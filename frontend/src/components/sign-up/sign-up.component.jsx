import React from 'react';

import { 
    Button,
    Form, 
    FormGroup,
    InputGroup,  
    InputGroupText, 
    InputGroupAddon, 
    Input,
 } from 'reactstrap';

const SignUp = () => (
   <div>
    <h3 className="text-center">Sign Up</h3>
    <br></br>
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
        <FormGroup row>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Confirm Password: </InputGroupText>
                    </InputGroupAddon>
                <Input type="confirm_password" name="confirm_password" id="confirm_password"/>
            </InputGroup>
        </FormGroup>
        <Button outline color="success" size="sm" block>Sign Up</Button>
    </Form>
   </div>
)


export default SignUp;