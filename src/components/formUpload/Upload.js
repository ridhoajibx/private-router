import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { CardBody, CardImg, Spinner } from 'reactstrap';

const Upload = (props) => {
    return (
        <div>
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
                                    ></img>
                                    <i onClick={props.handleShowmodal} className="icons"><FaCamera /></i>
                                </div>
                                <h5 className="title">{props.user.name}</h5>
                                <p className="description">Date of birth: {props.user.dateOfBirth ? props.user.dateOfBirth : 'not set'}</p>
                            </>
                    }
                </div>
            </CardBody>
        </div>
    );
}

export default Upload;
