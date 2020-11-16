import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Form, FormGroup, Label, Input, Button, Card, CardBody, Row, Col, CardHeader, CardTitle } from 'reactstrap';
const Setting = (props) => {
    const [state, setState] = useState({
        password: "",
        password2: "",
        errors: {},
        valid: {}
    })
    const [hidden, setHidden] = useState(true)
    const onHandler = (e) => {
        // this is code
        e.preventDefault();
        const { name, value } = e.target;
        let errors = state.errors
        let valid = state.valid

        switch (name) {
            case 'password': {
                let err;
                let success;
                if (value === '') {
                    err = 'Password is required'
                } else if (value.length < 8) {
                    err = 'Password must be 8 characters long!';
                } else {
                    success = 'password is validated'
                }
                errors.password = err;
                valid.password = success;
                break;
            }
            case 'password2': {
                let err;
                let success;
                if (value === '') {
                    err = 'Confirm password is required'
                } else if (value.length < 8) {
                    err = 'Confirm Password must be 8 characters long!';
                } else if (value !== state.password) {
                    err = 'Password does not match!';
                } else {
                    success = 'Password match'
                }
                errors.password2 = err;
                valid.password2 = success;
                break;
            }
            default:
                break;
        }

        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const onSubmit = (e) => {
        // this is code 
        e.preventDefault()
        let url = 'https://peaceful-gorge-77974.herokuapp.com/users/changepassword'
        let header = {
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem("jwtToken")
            }
        }


        let data = {
            password: state.password,
            password2: state.password2
        }

        if (state.valid) {
            axios.put(url, data, header)
                .then(response => {
                    const password = response.data;
                    if (password.msg === "Password Changed!") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Great..',
                            text: password.msg
                        })
                    } else {
                        throw password
                    }
                    console.log(response, 'cek response');
                })
                .catch(error => {
                    console.log(error.response.data.msg, 'cek error');
                    const errorMsg = error.response.data.msg
                    Swal.fire({
                        icon: 'error',
                        title: 'opps..',
                        text: errorMsg
                    })
                })
        }
        setTimeout(() => {
            setState({
                password: "",
                password2: "",
                errors: {},
                valid: {}
            })
        }, 3000);
    }

    const showPass = (e) => {
        e.preventDefault()
        setHidden(!hidden)
    }
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Settings</h4>
            </span>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-weight-bold">Change password</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={onSubmit}>
                                <FormGroup>
                                    <Label for="Password">New Password</Label>
                                    <Input type={hidden ? 'password' : 'text'} name="password" id="password" placeholder="Password" value={state.password} onChange={onHandler} />
                                    <small className="mt-2">
                                        {state.errors.password ?
                                            <p className="mt-2 text-danger">{state.errors.password}</p> :
                                            <p className="mt-2 text-primary">{state.valid.password}</p>
                                        }
                                    </small>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password2">Confirm Password</Label>
                                    <Input type={hidden ? 'password' : 'text'} name="password2" id="password2" placeholder="Confirm password" value={state.password2} onChange={onHandler} />
                                    <small className="mt-2">
                                        {state.errors.password2 ?
                                            <p className="mt-2 text-danger">{state.errors.password2}</p> :
                                            <p className="mt-2 text-primary">{state.valid.password2}</p>
                                        }
                                    </small>
                                    <span className="mt-2 btn btn-password-show" onClick={showPass} >{hidden ? 'Show' : 'Hide'}</span>
                                </FormGroup>
                                <div className="d-flex justify-content-center">
                                    {state.errors.password2 ?
                                        <Button disabled size='lg' color='primary' style={{ fontSize: '16px' }}>submit</Button> :
                                        <Button size='lg' color='primary' style={{ fontSize: '16px' }}>submit</Button>
                                    }
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default Setting;
