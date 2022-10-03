import React from 'react'

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

import ImageListItem from '@mui/material/ImageListItem';

import '../../assets/css/edition.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: 5,
  };

const Edition = ({
    openMoreEdition, 
    handleCloseMoreEdition, 
    id, 
    index, 
    image, 
    title, 
    edition_type,
    description, 
    price
}) => {
    return (
        <Modal
            open={openMoreEdition}
            onClose={handleCloseMoreEdition}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form className='text-center'>
                    <div className="">
                    <div className='col close_modal'>
                        <button onClick={handleCloseMoreEdition}><CloseIcon/></button>
                    </div>
                        <ImageListItem
                            sx={{
                                top: 10,
                                left: '28%',
                                border: 1,
                                boxShadow:10,
                                maxWidth:250
                            }}
                        >
                            <img
                                src={image} 
                                alt={image} 
                                // loading="lazy"
                            />
                            {/* <ImageListItemBar position="below" title={title}  /> */}
                        </ImageListItem>
                        <Box>
                            <div className='mt-4'>
                                <h2 className='mt-4'>{title}</h2>
                                <p className='mt-5'>{description}</p>
                                <p className=''><b>{edition_type}</b></p>
                                {/* <p>ID: {id}</p> */}
                                <p>Индекс: {index}</p>
                                <p>Цена: <b>{price}.00</b> руб</p>
                            </div>
                        </Box>
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default Edition