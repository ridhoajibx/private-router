import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
        console.log(setState({
            password: e.target.value,
            confirmPass: e.target.value,
        }));
    }
    console.log(props, "cek props");
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Setting Password</h4>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="Password">New Password</Label>
                    <Input type="text" name="password" id="Password" placeholder="Password" value={state.password} onChange={onHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input type="confirmpassword" name="confirmpass" value={state.confirmpass} onChange={onHandler} id="confirmPassword" placeholder="confirm password" />
                </FormGroup>
                <Button>submit</Button>
            </Form>
        </div>

    )
}

export default Setting;
