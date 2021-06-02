import React from 'react';
import { Modal } from 'react-bootstrap';
import './Loading.scss';

const Loading = ({ show }) => {
    return (<>
        <Modal show={show} aria-labelledby="contained-modal-title-vcenter"
            centered>
           <div className="modal-body">
                <div className='text-center'>
                    <div className="globalLoader"></div>
                </div>
            </div>
        </Modal>
    </>
    );
}
export default Loading;