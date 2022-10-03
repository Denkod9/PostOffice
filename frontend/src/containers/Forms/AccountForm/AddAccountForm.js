import React, { useState, useEffect } from 'react'

import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';

import Button from '@mui/material/Button';

import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import AddAccount from '../../../components/AdminOptions/AccountsOptions/AddAccount';

import { add_subscriber } from '../../../actions/Accounts/accounts'
import { connect } from "react-redux";
import axios from "axios";

const AddAccountForm = ({ add_subscriber }) => {
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
        role: 'SUBSCRIBER',
        phone: '',
        address: 1,
        is_active: '',
        is_staff: '',
        password: ''
    });

    const {
        email,
        first_name,
        last_name,
        date_of_birth,
        role,
        phone,
        address,
        is_active,
        is_staff,
        password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Открыть окно добовления издания
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Получить типы изданий
    const [addressOptions, setAddressOptions] = useState()
    const get_address = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/address/`
        const res = await axios.get(URL)
        setAddressOptions(res.data)
    }

    // Обработчик окна добовления издания
    const onClick = () => {
        add_subscriber(
            email,
            first_name,
            last_name,
            date_of_birth,
            role,
            phone,
            address,
            is_active,
            is_staff,
            password
        )
        console.log(formData)
        handleClose()
        // window.location.reload()
    }

    useEffect(() => {
        get_address()
    }, [])
    return (
        <div>
            <Button
                variant="outlined"
                startIcon={<PersonAddAlt1RoundedIcon />}
                onClick={handleOpen}
                title='Добавить подписчика'
            >
                Добавить подписчика
            </Button>

            {/* Окно добовления издания */}
            <ModalWindow
                open={open}
                handleClose={handleClose}
                title={<h1>Добавить Подписчика</h1>}
                onClick={onClick}
                children={
                    <AddAccount
                        optionAddress={addressOptions}
                        email={email}
                        first_name={first_name}
                        last_name={last_name}
                        date_of_birth={date_of_birth}
                        role={role}
                        phone={phone}
                        address={address}
                        is_active={is_active}
                        is_staff={is_staff}
                        password={password}
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

export default connect(mapStateToProps, { add_subscriber })(AddAccountForm);
// export default AddAccountForm