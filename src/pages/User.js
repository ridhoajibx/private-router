import React from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Row } from 'reactstrap';

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
                                <p className="description">@ridhoajibx</p>
                            </div>
                            <p className="description text-center">
                                "I like the way you work it <br />
                                No diggity <br />I wanna bag it up"
                            </p>
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
                                    <Col md="6">
                                        <FormGroup>
                                            <label>Full Name</label>
                                            <Input
                                                defaultValue="Jumakri Ridho Fauzi"
                                                placeholder="Full name"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <label>Username</label>
                                            <Input
                                                defaultValue="ridhoajibx"
                                                placeholder="Username"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>Address</label>
                                            <Input
                                                defaultValue="Kampung Tengah, Nongsa"
                                                placeholder="Home Address"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <label>City</label>
                                            <Input
                                                defaultValue="Batam"
                                                placeholder="City"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <label>Country</label>
                                            <Input
                                                defaultValue="Indonesia"
                                                placeholder="Country"
                                                type="text" 
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>About Me</label>
                                            <Input
                                                type="textarea"
                                                defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
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
