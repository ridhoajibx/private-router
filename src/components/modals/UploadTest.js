import React from 'react';
import { useState } from 'react';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import { Modal, ModalBody } from 'reactstrap';

const UploadTest = (props) => {
    const [files, setFiles] = useState([])
    // https://peaceful-gorge-77974.herokuapp.com/users/editphoto
    const toast = (innerHTML) => {
        const el = document.getElementById('toast')
        el.innerHTML = innerHTML
        el.className = 'show'
        setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
    }

    const getUploadParams = async () => {
        return { url: 'https://peaceful-gorge-77974.herokuapp.com/users/editphoto' }
    }

    const handleChangeStatus = ({ meta, remove }, status) => {
        if (status === 'headers_received') {
            toast(`${meta.name} uploaded!`)
            remove()
        } else if (status === 'aborted') {
            toast(`${meta.name}, upload failed...`)
        }
    }

    return (
        <Modal isOpen={props.modal} toggle={() => props.setModal(false)}>
            <ModalBody>
                <div id="toast">Upload</div>
                <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    maxFiles={1}
                    multiple={false}
                    canCancel={false}
                    inputContent="Drop A File"
                    styles={{
                        dropzone: { width: 400, height: 200 },
                        dropzoneActive: { borderColor: 'purple' },
                    }}
                />
            </ModalBody>
        </Modal>
    )
}

export default UploadTest;
