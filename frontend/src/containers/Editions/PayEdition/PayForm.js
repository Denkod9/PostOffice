import React from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';

import '../../../assets/css/pay_form.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderRadius: 5,
};

const PayForm = ({open, handleClose, title, price, onSubmit}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={e => onSubmit(e)} className='text-center'>
                    <div className='col close_modal'>
                        <p>Подписаться на издание <strong>{title}</strong></p>
                        <button onClick={handleClose}><CloseIcon/></button>
                        <hr/>
                    </div>

                    <div>
                        <TextField
                          id="standard-textarea"
                          defaultValue='1234 5678 1923 1324'
                          type='text'
                          label="Card Number"
                          placeholder="0000 0000 0000 0000"
                          variant="standard"
                          size='small'
                          required
                        />
                    </div>

                    <div className="col mt-4">
                        <TextField
                            className='me-4'
                            id="standard-textarea"
                            defaultValue='03/24'
                            type='text'
                            label="Expiry date"
                            placeholder="mm/yy"
                            variant="standard"
                            size='small'
                            required
                        />
                        <TextField
                            id="standard-textarea"
                            defaultValue='452'
                            type='number'
                            label="CVV"
                            placeholder="000"
                            variant="standard"
                            size='small'
                            required
                        />
                    </div>

                    <div className="mt-5">
                        <h3>К оплате: <strong>{price}.00</strong> руб</h3>
                    </div>


                    <div className='mt-5' >
                        <button className='btn btn-primary me-2'>
                            Оплатить
                        </button>
                        <button className='btn btn-danger' onClick={handleClose}>
                            Отменить
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
}
export default PayForm;