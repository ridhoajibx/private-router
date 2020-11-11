import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Form, FormGroup, Label, Input, Button, Card, CardBody, Row, Col } from 'reactstrap';
const Setting = (props) => {
    const [state, setState] = useState({
        password: '',
        ConfirmPass: ''
    })
    const onHandler = (e) => {
        // this is code
        e.preventDefault();
        setState({ [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        // this is code 
        e.preventDefault()
        setState({
            password: e.target.value,
            confirmPass: e.target.value,
        });
    }
    console.log(state, 'cek state');
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
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input type="password" name="confirmpass" value={state.confirmpass} onChange={onHandler} id="confirmPassword" placeholder="confirm password" />
                                </FormGroup>
                                <div className="d-flex justify-content-center">
                                    <Button size='lg' color='primary' style={{ fontSize: '16px' }}>submit</Button>
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
