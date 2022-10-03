import React, { useState } from "react";
import {un_subscribe_person} from "../../../actions/Editions/edition";
import {connect} from "react-redux";

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
    description,
    price,
    un_subscribe_edition,
    un_subscribe_person
}) => {

    const onSubmit = e => {
        e.preventDefault();

        un_subscribe_person(un_subscribe_edition)
        window.location.reload()
    };

    // Подробнее о издании
    const [openMoreEdition, setOpenMoreEdition] = useState(false);
    const handleOpenMoreEdition = () => setOpenMoreEdition(true);
    const handleCloseMoreEdition = () => setOpenMoreEdition(false);

    return(
        <form onSubmit={e => onSubmit(e)}>
            <Card sx={{ maxWidth: 240, maxHeight: 680, minHeight: 380, boxShadow: 3}}>
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
                    <CardActions sx={{ marginLeft: '20%' }}>
                        <Button
                            // className="ms-4"
                            type="button"
                            size="small"
                            color="primary"
                            onClick={onSubmit}
                        >
                            Отписаться
                        </Button>
                    </CardActions>
                </Card>

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
            {/* <img
                src={image}
                // width='200'
                // height='200'
                className="card-img-top"
                alt={title}
            />
            <div className="card-body">
                <h4 className="card-title">{id}</h4>
                <h4 className="card-title">{index}</h4>
                <h3 className="card-title">{title}</h3>
                <h5 className="card-text">{edition_type}</h5>
                <h3 className="card-text">{price}.00 руб.</h3>
                <button className="btn btn-primary">Отписаться</button>
            </div> */}
        </form>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, { un_subscribe_person })(TemplateMyEdition);

// export default TemplateMyEdition;