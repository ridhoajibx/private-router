import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
// import { Line } from 'react-chartjs-2';
const setting = (props) => {
    console.log(props, "cek props");
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Setting Password</h4>
            </span>
            <br></br>
            <br></br>
            <Form>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="Password" name="Password" id="Password" placeholder="Password" />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input type="confirmpassword" name="confirmpassword" id="confirmPassword" placeholder="confirm password" />
      </FormGroup>
            </Form>
            </div>

    )
}

export default setting;