import React, { useEffect, useState } from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaBars, FaCamera, FaTimes } from 'react-icons/fa';
import { Button, Card, CardBody, CardHeader, CardImg, CardTitle, Col, Form, FormGroup, Input, Row, Spinner } from 'reactstrap';
import UploadAvatar from '../components/modals/UploadAvatar';

import { connect } from 'react-redux';
import { fetchUsers, updateUsers } from '../redux';


const User = (props) => {
    console.log(props, 'cek props user');
    const [modal, setModal] = useState(false);
    const [avatar, setAvatar] = useState({});
    const [user, setUser] = useState({})
    const handleShowmodal = (data) => {
        setAvatar(data)
        setModal(!modal)
    }

    const onSubmit = (e) => {
        e.preventDefault(e);
        props.updateUsers(user);
    }

    useEffect(() => {
        props.fetchUsers()
    }, [])

    useEffect(() => {
        setUser({
            name: props.user.name,
            dateOfBirth: props.user.dateOfBirth,
        })
    }, [props.user])

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
                                props.loading ? <Spinner /> : props.error ? <h4>{props.error}</h4> :
                                    <CardImg
                                        alt="..."
                                        src={props.user.photo}
                                    />
                            }
                        </div>
                        <CardBody>
                            <div className="author">
                                {
                                    props.loading ? <Spinner /> : props.error ? <h4>{props.error}</h4> :
                                        <>
                                            <div>
                                                <img
                                                    alt="..."
                                                    className="avatar border-gray"
                                                    src={props.user.photo}
                                                />
                                                <i onClick={() => handleShowmodal(props.user)} className="icons"><FaCamera /></i>
                                            </div>
                                            <h5 className="title">{props.user.name}</h5>
                                            <p className="description">Date of birth: {props.user.dateOfBirth ? props.user.dateOfBirth : 'not set'}</p>
                                        </>
                                }
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
                            <Form onSubmit={(e) => onSubmit(e)}>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>Full Name</label>
                                            <Input
                                                placeholder="Full name"
                                                value={user.name}
                                                name="name"
                                                onChange={(e) => setUser({ ...user, name: e.target.value })}
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
                                                placeholder="Your date of birth"
                                                type="date"
                                                name="dateOfBirth"
                                                value={user.dateOfBirth}
                                                onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="update ml-auto mr-auto">
                                        {
                                            props.loading === true ?
                                                <Button
                                                className="btn-round"
                                                color="primary"
                                                type="submit"
                                            >
                                                Update...<Spinner size="sm" color="white" />
                                            </Button> :
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Update Profile
                                                </Button>
                                        }
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
        fetchUsers: () => dispatch(fetchUsers()),
        updateUsers: (user) => dispatch(updateUsers(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
