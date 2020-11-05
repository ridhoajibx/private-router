import React, { useState } from 'react';
import LogoImg from '../assets/img/logo/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../redux/actions/authAction';
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

    const userLink = (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </NavItem>

            <NavItem>
                <NavLink className="nav-link" exact to="/Product">Product</NavLink>
            </NavItem>

            <NavItem >
                <NavLink className="nav-link" exact to="/app">App</NavLink>
            </NavItem>

            <NavItem >
                <NavLink className="nav-link" exact to="/app/user">Profile</NavLink>
            </NavItem>

            <NavItem className="d-flex align-items-center">
                <Button color="primary" size="sm" onClick={props.logout} >Logout</Button>
            </NavItem>
        </Nav>

    );
    const guestLink = (

        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
                <Button color="primary" size="sm" onClick={props.handleOpen} >Signin / Signup</Button>
            </NavItem>
        </Nav>

    );


    return (
        <div className="shadow">
            <Navbar color="light" light expand="md" className="header fixed-top">
                <Link className="navbar-brand logo" to="/">
                    <img src={LogoImg} alt="logo-fund" className="logo-img" />
                    <div className="ml-2 font-weight-semibold logo-text">
                        Fun<span className="text2">d.</span>
                    </div>
                </Link>
                <NavbarToggler onClick={toggle} />
                {/* { props.auth } */}
                <Collapse isOpen={isOpen} navbar>

                    {props.auth ? userLink : guestLink}

                </Collapse>
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.global.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOpen: () => dispatch({ type: 'SHOW' }),
        handleSignup: () => dispatch({ type: 'REGISTER' }),
        logout: () => dispatch(action.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);