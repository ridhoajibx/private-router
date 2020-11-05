import React, { useEffect, useState } from 'react';
import profile from '../../assets/img/logo/avatar.svg';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody } from 'reactstrap';
import { fetchUsers, updateAvatar } from '../../redux';
import { FaCamera } from 'react-icons/fa';

const UploadAvatar = (props) => {
    const [avatar, setAvatar] = useState({})
    const [preview, setPreview] = useState()

    useEffect(() => {
        props.fetchUsers()
    }, [])
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!avatar.photo) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(avatar.photo)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [avatar.photo])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setAvatar({ photo: undefined })
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setAvatar({...avatar, photo: e.target.files[0] })
    }

    const onSubmitFile = e => {
        e.preventDefault();
        props.updateAvatar(avatar)
    }
    console.log(avatar, "cek props avatar");

    return (
        <Modal isOpen={props.modal} toggle={() => props.setModal(false)}>
            <ModalBody>
                <Form onSubmit={(e)=>onSubmitFile(e)}>
                    <FormGroup className="d-flex flex-column align-items-center">
                        {avatar.photo ?
                            <>
                                <img src={preview} width="200" height="200" className="rounded-circle" alt="" />
                                <Label for="exampleFile">
                                    <span className="mt-4 icons-upload hidden">Choose avatar <FaCamera className="ml-2" /></span>
                                    <Input
                                        style={{ display: 'none' }}
                                        type="file"
                                        name="photo"
                                        id="exampleFile"
                                        onChange={onSelectFile}
                                    />
                                </Label>
                                <Button className="mt-2" color="primary">Upload</Button>
                            </> :
                            <>
                                <img src={profile} width="200" height="200" className="rounded-circle" alt="" />
                                <Label for="exampleFile">
                                    <span className="mt-4 icons-upload">Choose avatar <FaCamera className="ml-2" /></span>
                                    <Input
                                        style={{ display: 'none' }}
                                        type="file"
                                        name="photo"
                                        id="exampleFile"
                                        onChange={onSelectFile}
                                        accept="image/jpeg, image/png, image/gif, image/bmp"
                                    />
                                </Label>
                            </>
                        }

                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal >
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        updateAvatar: (avatar) => dispatch(updateAvatar(avatar))
    }
}

export default connect(null, mapDispatchToProps) (UploadAvatar);
