import React, { useState } from 'react';
import LogoImg from '../assets/img/logo/logo.svg';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="shadow">
            <Navbar color="light" light expand="md" className="header fixed-top">
                <Link className="navbar-brand logo" to="/">
                    <img src={ LogoImg } alt="logo-fund" className="logo-img" />
                    <div className="ml-2 font-weight-semibold logo-text">
                        Fun<span className="text2">d.</span>
                    </div>
                </Link>
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
        </div>
    );
}

export default Header;
