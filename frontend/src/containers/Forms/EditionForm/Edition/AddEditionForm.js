import React, { useState, useEffect } from 'react'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import Button from '@mui/material/Button';

import ModalWindow from "../../../../components/ModalWindow/ModalWindow";
import AddEdition from '../../../../components/AdminOptions/EditionOptions/Edition/AddEdition';

import { edition_types } from "../../../../actions/Editions/edition";
import { save_edition } from "../../../../actions/Editions/edition";
import { connect } from "react-redux";
import axios from "axios";

const AddEditionForm = ({ edition_types, save_edition }) => {
    const [formData, setFormData] = useState({
        image: 'default.png',
        index: '',
        title: '',
        price: '',
        edition_type: 1,
        description: ''
    });

    const { image, index, title, price, edition_type, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Открыть окно добовления издания
    const [openAddEdition, setOpenAddEdition] = useState(false);
    const handleOpenAddEdition = () => setOpenAddEdition(true);
    const handleCloseAddEdition = () => setOpenAddEdition(false);

    // Получить типы изданий
    const [editionTypes, setEditionTypes] = useState()
    const get_edition_types = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/edition_types/`
        const res = await axios.get(URL)
        setEditionTypes(res.data)
    }

    // Обработчик окна добовления издания
    const onClickAddEdition = () => {
        save_edition(image, index, title, price, edition_type, description)
        handleCloseAddEdition()
        window.location.reload()
    }

    useEffect(() => {
        get_edition_types()
        edition_types()
    }, [])

    return (
        <div>
            <Button
                variant="outlined"
                startIcon={<AddCircleRoundedIcon />}
                onClick={handleOpenAddEdition}
                title='Добавить издание'
            >
                Добавить издание
            </Button>

            {/* Окно добовления издания */}
            <ModalWindow
                open={openAddEdition}
                handleClose={handleCloseAddEdition}
                title={<h1>Добавить издание</h1>}
                onClick={onClickAddEdition}
                children={
                    <AddEdition
                        optionTypes={editionTypes}
                        image={image}
                        index={index}
                        title={title}
                        price={price}
                        edition_type={edition_type}
                        description={description}
                        onChange={onChange}
                    />
                }
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { edition_types, save_edition })(AddEditionForm);
// export default AddEditionForm