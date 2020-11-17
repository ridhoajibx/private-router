import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import { FaBars, FaTimes } from 'react-icons/fa';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Row, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { fetchUsers, updateUsers } from '../redux';
import Upload from '../components/formUpload/Upload';


const User = ({fetchUsers, updateUsers, toggleSide, handleToggleSide,userData, loading, error }) => {
    const [user, setUser] = useState({
        name: "",
        dateOfBirth: "",
        photo: "",
        email: "",
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault(e);
        updateUsers(user);
    }

    const uploadFile = (e) => {
        let file = e.target.files[0];
        let header = {
            headers: {
                'access_token': localStorage.getItem('jwtToken')
            }
        }
        let data = new FormData();
        data.append('photo', file)

        axios.put("https://peaceful-gorge-77974.herokuapp.com/users/editphoto", data, header)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Great..',
                    text: res.data.msg
                })
                fetchUsers()
            })
            .catch(error => {
                const errorMsg = error.message
                Swal.fire({
                    icon: 'error',
                    title: 'ops..',
                    text: errorMsg
                })
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    useEffect(() => {
        setUser({
            name: userData.name,
            dateOfBirth: userData.dateOfBirth,
            photo: userData.photo,
            email: userData.email,
            password: userData.password,
        })
    }, [userData])

    return (
        <div className={`content-wrapper content-wrapper--${!toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={handleToggleSide}>
                {!toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Profile</h4>
            </span>
            <Row className="my-4">
                <Col md="4">
                    <Card className="card-user">
                        <Upload
                            loading={loading}
                            error={error}
                            user={userData}
                            uploadFile={uploadFile}
                            setUser={ setUser }
                            fetchUsers={ fetchUsers }
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
                                            loading === true ?
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
        userData: state.user.userData,
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
