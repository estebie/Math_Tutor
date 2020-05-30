import React from 'react';
import { 
    Container,
    Navbar,
    NavbarBrand,
    NavItem,
    Nav,  
    NavLink, 
 } from 'reactstrap';

import {signOutSuccess} from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const NavigationBar = ({signOutSuccess}) => {
    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Math Tutor</NavbarBrand>
                    <Nav navbar className="ml-auto">
                        <NavItem className="mx-2">
                            <NavLink href="/components/">Shop</NavLink>
                        </NavItem>
                        <NavItem className="mx-2" active>
                            <NavLink href="/components/">Lessons</NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                            <NavLink href="#" onClick={signOutSuccess}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                    </Container>
            </Navbar>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signOutSuccess: () => dispatch(signOutSuccess()),
})

export default connect(null,mapDispatchToProps)(NavigationBar);