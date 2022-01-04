import { Modal } from "react-bootstrap"
import { useState } from 'react';

interface CustomModalProps {
    title?: any;
    body?: any;
    footer?: any;
    show: any;
    canClose:any;
    handleClose: any;
}

function CustomModal(props:CustomModalProps) {
    const { show, handleClose, canClose, title, body, footer} = props;
    return (
        <Modal show={show} onHide={handleClose} backdrop={canClose || 'static'} keyboard={canClose}>
            <Modal.Header closeButton={canClose}>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body> 
                {props.body}
            </Modal.Body>

            <Modal.Footer>
                {props.footer}
            </Modal.Footer>
        </Modal>
    )
}

function useModal() {
    const [show, setShow] = useState<boolean>(false);
    const [canClose, setCanClose] = useState<boolean>(true);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const modal = <CustomModal show={show} canClose={canClose} handleClose={handleClose} />

    return {
        Modal: modal,
        show,
        canClose,
        handleShow,
        handleClose
    };
}

export default useModal;