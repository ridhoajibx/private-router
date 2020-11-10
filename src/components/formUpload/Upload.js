import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { CardBody, CardImg, Form, Label, Progress, Spinner } from 'reactstrap';

const Upload = (props) => {
    console.log(props, 'cek props upload');
    const { user, uploadFile } = props;

    return (
        <div>
            <div className="image">
                <CardImg
                    alt="..."
                    src={user.photo}
                />
            </div>

            <CardBody>
                <div className="author">
                    <div>
                        <img
                            alt="..."
                            className="avatar border-gray"
                            src={user.photo}
                        ></img>
                        <Form>
                            <Label for="uploadImg">
                                <div className="mb-2">
                                    <span className="icons-upload">Upload Avatar<FaCamera className="ml-2" /></span>
                                </div>
                                <input accept="image/*" id="uploadImg" type="file" style={{ display: 'none' }} onChange={uploadFile} />
                            </Label>
                        </Form>
                    </div>
                    <h5 className="title">{user.name}</h5>
                    <p className="description">Date of birth: {user.dateOfBirth ? user.dateOfBirth : 'not set'}</p>
                </div>
            </CardBody>
        </div>
    );
}

export default Upload;
