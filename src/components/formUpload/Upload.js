import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCamera } from 'react-icons/fa';
import { CardBody, CardImg, Form, Label, Progress, Spinner } from 'reactstrap';
import Swal from 'sweetalert2'

const Upload = (props) => {
    console.log(props, 'cek props upload');
    const { user } = props;
    const [state, setState] = useState({
        photo: '',
        percentTage: 0
    });

    useEffect(() => {
        setState({
            ...state, 
            photo: user.photo
        })
    }, [user.photo])

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
                console.log(res, 'cek response');
                Swal.fire({
                    icon: 'success',
                    title: 'Great..',
                    text: res.data.msg
                  })
            })
    }
    console.log(user, 'cek photo');
    return (
        <div>
            <div className="image">
                <CardImg
                    alt="..."
                    src={state.photo}
                />
            </div>

            <CardBody>
                <div className="author">
                    <div>
                        <img
                            alt="..."
                            className="avatar border-gray"
                            src={state.photo}
                        ></img>
                        <Form>
                            <Label for="uploadImg">
                                <div>
                                    <span className="icons-upload">Upload Avatar<FaCamera className="ml-2" /></span>
                                </div>
                                <input id="uploadImg" type="file" style={{ display: 'none' }} onChange={uploadFile} />
                            </Label>
                        </Form>
                    </div>
                    <h5 className="title">{user.name}</h5>
                    <p className="description">Date of birth: {user.dateOfBirth ? user.dateOfBirth : 'not set'}</p>
                    {
                        state.percentTage > 0 &&
                            <div>
                                <Progress striped color="info" value={state.percentTage} />
                                <div className="text-center">{state.percentTage}%</div>
                            </div>
                    }
                </div>
            </CardBody>
        </div>
    );
}

export default Upload;
