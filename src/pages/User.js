import React, { useEffect, useState } from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button, Card, CardBody, CardHeader, CardImg, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import UploadAvatar from '../components/modals/UploadAvatar';

import { connect } from 'react-redux';
import { fetchUsers } from '../redux';


const User = (props) => {
    console.log(props, 'cek props user');
    const [modal, setModal] = useState(false);
    const [avatar, setAvatar] = useState({});
    const handleShowmodal = (data) => {
        setAvatar(data)
        setModal(!modal)
    }
    useEffect(() => {
        props.fetchUsers()
    }, [])
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
                            {
                                props.loading ? <h4>Loading...</h4> : props.error ? <h4>{ props.error }</h4> :
                                    <CardImg
                                        alt="..."
                                        src={props.user.photo}
                                    />
                            }
                        </div>
                        <CardBody>
                            <div className="author">
                                <a href="#pablo" onClick={() => handleShowmodal(props.user)} >
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={props.user.photo}
                                    />
                                </a>
                                <h5 className="title">{props.user.name}</h5>
                                <p className="description">Date of birth: {props.user.dateOfBirth ? props.user.dateOfBirth : 'not set'}</p>
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
                                {/* <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label for="exampleFile">Avatar</Label>
                                            <Input type="file" name="file" id="exampleFile" />
                                            <FormText color="muted">
                                                Upload your avatar here!
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                </Row> */}
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
                                    <Col md="12">
                                        <FormGroup>
                                            <label>Date of birth</label>
                                            <Input
                                                defaultValue="1993-12-10"
                                                placeholder="Your date of birth"
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
            {/* modal */}
            <UploadAvatar modal={modal} setModal={setModal} avatar={avatar} />
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.userData,
        loading: state.user.loading,
        error: state.user.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
