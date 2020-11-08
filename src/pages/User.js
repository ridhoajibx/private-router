import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Row, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { fetchUsers, updateUsers } from '../redux';
import Upload from '../components/formUpload/Upload';


const User = (props) => {
    console.log(props, 'cek props user');
    const [user, setUser] = useState({
        name: "",
        dateOfBirth: "",
        photo: "",
        email: "",
        password: ""
    })

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
            photo: props.user.photo,
            email: props.user.email,
            password: props.user.password,
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
                        <Upload
                            loading={props.loading}
                            error={props.error}
                            user={props.user}
                            setUser={ setUser }
                            fetchUsers={ props.fetchUsers }
                            // handleShowmodal={handleShowmodal}
                        />
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
        updateUsers: (user) => dispatch(updateUsers(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
