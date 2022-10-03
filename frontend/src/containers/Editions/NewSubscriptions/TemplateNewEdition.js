import React, { useState} from "react";
import { connect } from "react-redux";
import { subscribe_person } from "../../../actions/Editions/edition";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';

import PayForm from "../PayEdition/PayForm";
import Edition from "../Edition";

import '../../../assets/css/new_edition.css'

const TemplateMyEdition = ({
    id,
    image,
    index,
    title,
    edition_type,
    price,
    description,
    subscribe_person,
}) => {
    

    // Подробнее о издании
    const [openMoreEdition, setOpenMoreEdition] = useState(false);
    const handleOpenMoreEdition = () => setOpenMoreEdition(true);
    const handleCloseMoreEdition = () => setOpenMoreEdition(false);

    // Форма оплаты
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const onSubmit = e => {
        
        e.preventDefault();
        handleClose()
        subscribe_person(localStorage.getItem('id'), id)
        // window.location.reload()
    };


    return (
        <div>
            <form>
                {/* <Card sx={{ maxWidth: 240, maxHeight: 700}}> */}
                <Card sx={{ marginTop: 5, maxWidth: 240, maxHeight: 680, minHeight: 380, boxShadow: 3 }}>
                    <CardActionArea onClick={handleOpenMoreEdition}>
                        <div className="">
                            <img
                                src={image}
                                // width='320'
                                height='250'
                                className="card-img-top"
                                alt={title}
                            />
                            <div className="ms-2">
                                <ImageListItemBar position="below" title={title}/>
                            </div>
                        </div>
                        <CardContent >
                            <Typography variant="body2" color="text.secondary">
                                {id}
                            </Typography>
                            <div className="mt-2">
                                <Typography variant="body2" color="text.secondary">
                                    Индекс: {index}
                                </Typography>
                            </div>
                            <div className="mt-2">
                                <Typography variant="body2" color="text.secondary">
                                    <b>{edition_type}</b>
                                </Typography>
                            </div>
                            <div className="mt-3">
                                <Typography  variant="body" color="text.secondary">
                                    <b>{price}.00 руб</b>
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            className="ms-5"
                            type="button"
                            size="small"
                            color="primary"
                            onClick={handleOpen}
                        >
                            Подписаться
                        </Button>
                    </CardActions>
                </Card>
                
                <PayForm
                    title={title}
                    price={price}
                    open={open}
                    handleClose={handleClose}
                    onSubmit={e => onSubmit(e)}
                />

                <Edition
                    id={id}
                    index={index}
                    image={image}
                    title={title}
                    edition_type={edition_type}
                    description={description}
                    price={price}
                    openMoreEdition={openMoreEdition}
                    handleCloseMoreEdition={handleCloseMoreEdition}
                />
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, { subscribe_person })(TemplateMyEdition);

// export default TemplateMyEdition;