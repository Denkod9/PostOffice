import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: 5,
};

const ModalWindow = ({ open, handleClose, title, children, onClick }) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='close_modal'>
                    <Box
                    sx={{
                        marginLeft: 20
                    }}
                    >
                        <div className="">
                            {title}
                        </div>
                    </Box>


                    <button onClick={handleClose}><CloseIcon /></button>
                    <hr />
                </div>
                <div>
                    {children}
                </div>
                <div className="modal-footer">
                    <button 
                    type="button" 
                    className="btn btn-primary me-3"
                    onClick={onClick}
                    >Сохранить</button>
                    <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={handleClose}
                    >Отменить</button>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalWindow;