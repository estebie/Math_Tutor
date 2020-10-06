import React from 'react';
import { 
    Container,
    Navbar,
    NavbarBrand,
    NavItem,
    Nav,  
    NavLink, 
 } from 'reactstrap';
 import { NavLink as RRNavLink } from 'react-router-dom';
 
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
                            <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                            <NavLink tag={RRNavLink} exact to="/shop/" activeClassName="active">Shop</NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                            <NavLink tag={RRNavLink} exact to="/lesson/" activeClassName="active">Lessons</NavLink>
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