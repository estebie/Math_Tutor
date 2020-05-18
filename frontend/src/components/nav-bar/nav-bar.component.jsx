import React, {useState} from 'react';
import { 
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler , 
    NavItem,
    Nav,  
    NavLink, 
 } from 'reactstrap';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Math Tutor</NavbarBrand>
                <Nav navbar className="ml-auto">
                    <NavItem className="mx-2">
                        <NavLink href="/components/">Shop</NavLink>
                    </NavItem>
                    <NavItem className="mx-2" active>
                        <NavLink href="/components/">Lessons</NavLink>
                    </NavItem>
                    <NavItem className="mx-2">
                        <NavLink href="">Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default NavigationBar;