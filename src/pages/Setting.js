import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Form, FormGroup, Label, Input, Button, Card, CardBody, Row, Col } from 'reactstrap';
const Setting = (props) => {
    const [state, setState] = useState({
        password: "",
        password2: "",
        errors: {}
    })
    const onHandler = (e) => {
        // this is code
        e.preventDefault();
        const { name, value } = e.target;
        let errors = state.errors

        switch (name) {
            case 'password': {
                let err;
                if (value.length < 8) {
                    err = 'Password must be 8 characters long!';
                } else if (value !== state.password2) {
                    err = '';
                }
                errors.password = err;
                break;
            }
            case 'password2': {
                let err;
                if (value.length < 8) {
                    err = 'Password must be 8 characters long!';
                } else if (value !== state.password) {
                    err = 'Password does not match!';
                }
                errors.password2 = err;
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
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'access_token': localStorage.getItem("jwtToken")
            }
        }

        // let formData = new FormData()
        // formData.append('password', state.password)
        // formData.append('password2', state.password2)

        let data = {
            'password': state.password,
            'password2': state.password2
        }

        if (!state.errors.password2) {
            axios.put(url, JSON.stringify(data), config)
            .then(response => {
                const password = response.data;
                if (password.msg === "Password Changed!") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Great..',
                        text: password.msg
                    })
                }
                console.log(response, 'cek response');
            })
            .catch(error => {
                const errorMsg = error.message
                Swal.fire({
                    icon: 'error',
                    title: 'opps..',
                    text: errorMsg.msg
                })
            })
        }
    }
    console.log(state.password, 'password');
    console.log(state.password2, 'confirm password');
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Settings</h4>
            </span>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <Form onSubmit={onSubmit}>
                                <FormGroup>
                                    <Label for="Password">New Password</Label>
                                    <Input type="password" name="password" id="Password" placeholder="Password" value={state.password} onChange={onHandler} />
                                    <small className="mt-2">
                                        {state.errors.password &&
                                            <p className="mt-2 text-danger">{state.errors.password}</p>
                                        }
                                    </small>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password2">Confirm Password</Label>
                                    <Input type="password" name="password2" value={state.password2} onChange={onHandler} id="password2" placeholder="confirm password" />
                                    <small className="mt-2">
                                        {state.errors.password2 &&
                                            <p className="mt-2 text-danger">{state.errors.password2}</p>
                                        }
                                    </small>
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
