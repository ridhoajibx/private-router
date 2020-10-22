import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    Button
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container fluid>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Fund.</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>

                        <NavItem style={props.display(props.Auth)}>
                            <Link className="nav-link" to="/app">App</Link>
                        </NavItem>

                        <NavItem className="d-flex align-items-center">
                            <Button color="primary" size="sm" style={props.display(!props.Auth)} onClick={() => props.setAuth(true)} >Login</Button>
                            <Button color="primary" size="sm" style={props.display(props.Auth)} onClick={() => props.setAuth(false)} >Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;
