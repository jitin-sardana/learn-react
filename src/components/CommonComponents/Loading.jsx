import React from 'react';
import { Modal } from 'react-bootstrap';
import ErrorFallback from './ErrorFallback';
import './Loading.scss';

const Loading = ({ show }) => {
    try {
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
        )
    } catch (error) {
        return <ErrorFallback error={error} />
    }
}
export default Loading;