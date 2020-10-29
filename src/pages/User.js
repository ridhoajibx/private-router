import React from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';

const User = (props) => {
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Profile</h4>
            </span>
            <Row className="my-4">
                <Col md="4">
                    <Card className="card-user">
                        <div className="image">
                            <img
                                alt="..."
                                src={ProfileImg}
                            />
                        </div>
                        <CardBody>
                            <div className="author">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={ProfileImg}
                                    />
                                    <h5 className="title">Jumakri Ridho Fauzi</h5>
                                </a>
                                {/* <p className="description">@ridhoajibx</p> */}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Card className="card-user">
                        <CardHeader>
                            <CardTitle tag="h5">Edit Profile</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label for="exampleFile">Avatar</Label>
                                            <Input type="file" name="file" id="exampleFile" />
                                            <FormText color="muted">
                                                Upload your avatar here!
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>Full Name</label>
                                            <Input
                                                defaultValue="Jumakri Ridho Fauzi"
                                                placeholder="Full name"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="update ml-auto mr-auto">
                                        <Button
                                            className="btn-round"
                                            color="primary"
                                            type="submit"
                                        >
                                            Update Profile
                                        </Button>
                                    </div>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default User;
