import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCamera } from 'react-icons/fa';
import { CardBody, CardImg, Form, Label, Progress, Spinner } from 'reactstrap';

const Upload = (props) => {
    console.log(props, 'cek props upload');
    const [avatar, setAvatar] = useState({
        photo: '',
        percentTage: 0
    })
    useEffect(() => {
        setAvatar({
            photo: props.user.photo
        })
    }, [])

    const uploadFile = ({ target: { files } }) => {
        console.log(files[0])
        let data = new FormData();
        let header = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'access_token': localStorage.getItem('jwtToken')
            }
        }
        data.append('photo', files[0])

        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);

                if (percent < 100) {
                    setAvatar({ percenTage: percent })
                }
            }
        }

        axios.put("https://peaceful-gorge-77974.herokuapp.com/users/editphoto", data, header, options)
            .then(res => {
                console.log(res)
                setAvatar({ photo: res.data.url, percentTage: 100 }, () => {
                    setTimeout(() => {
                        setAvatar({ percentTage: 0 })
                    }, 1000);
                })
            })
    }
    console.log(avatar, 'cek photo');
    return (
        <div>
            <div className="image">
                <CardImg
                    alt="..."
                    src={avatar.photo}
                />
                {/* {
                    props.loading ? <Spinner /> : props.error ? <h4>{props.error}</h4> :
                } */}
            </div>

            <CardBody>
                <div className="author">
                    <div>
                        <img
                            alt="..."
                            className="avatar border-gray"
                            src={props.user.photo}
                        ></img>
                        <Form>
                            <Label for="uploadImg">
                                <div>
                                    <span className="icons-upload">Upload here! <FaCamera className="ml-2" /></span>
                                </div>
                                <input id="uploadImg" type="file" style={{ display: 'none' }} onChange={uploadFile} />
                            </Label>
                        </Form>
                        {
                            avatar.percentTage > 0 &&
                            <div>
                                <div className="text-center">{avatar.percentTage}%</div>
                                <Progress bar color="primary" active value={avatar.percentTage} />
                            </div>
                        }
                    </div>
                    <h5 className="title">{props.user.name}</h5>
                    <p className="description">Date of birth: {props.user.dateOfBirth ? props.user.dateOfBirth : 'not set'}</p>
                </div>
            </CardBody>
        </div>
    );
}

export default Upload;
