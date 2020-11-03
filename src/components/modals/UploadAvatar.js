import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, Modal } from 'reactstrap';

const UploadAvatar = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={() => props.setModal(false)}>
            <Card className="mb-0">
                <button type="button" className="close position-absolute text-white" onClick={() => props.setModal(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <CardImg className="bg-dark card-img-top" src={props.avatar.photo}></CardImg>
                <CardBody>
                    <Button className="float-right" size="sm" color="danger" onClick={() => props.setModal(false)}>Cancel</Button>
                </CardBody>
            </Card>
        </Modal >
    );
}

export default UploadAvatar;
