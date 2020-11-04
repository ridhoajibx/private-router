import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, Form, FormGroup, FormText, Input, Label, Modal, Spinner } from 'reactstrap';

const UploadAvatar = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={() => props.setModal(false)}>
            <Card className="mb-0 card-user">
                <div className="image">
                    <button type="button" className="close position-absolute" onClick={() => props.setModal(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {
                        props.loading ? <Spinner /> : props.error ? <h4>{props.error}</h4> :
                            <CardImg
                                alt="..."
                                src={props.avatar.photo}
                            />
                    }
                </div>
                <CardBody>
                    <div className="author">
                        <CardImg className="avatar border-gray" src={props.avatar.photo}></CardImg>
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                        </FormText>
                        </FormGroup>
                        <Button className="float-right" size="sm" color="primary">Upload</Button>
                    </Form>
                </CardBody>
            </Card>
        </Modal >
    );
}

export default UploadAvatar;
