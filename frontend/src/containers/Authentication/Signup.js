import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/Authentication/auth';
import axios from 'axios';

import PersonIcon from '@mui/icons-material/Person';
import GoogleIcon from '@mui/icons-material/Google';

import Button from '@mui/material/Button';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import '../../assets/css/nav_menu.css';

const Signup = ({ signup, isAuthenticated }) => {
    


    const [passShow, setPassShow] = useState(false)
    const handlePassShow = () => setPassShow(!passShow)

    const [rePassShow, setRePassShow] = useState(false)
    const handleRePassShow = () => setRePassShow(!rePassShow)

    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    // const { first_name, last_name, email, typeStreet, address, house, flat, phone, password, re_password } = formData;
    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            // signup(first_name, last_name, email, typeStreet, address, house, flat, phone, password, re_password);
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Navigate replace to='/' />
    }
    if (accountCreated) {
        return <Navigate replace to='/login' />
    }

    return (
        <div className='container mt-5'>
            <div className="text-center">
                <h1>Регистрация</h1>
                <p>Создайте ваш аккаунт</p>
            </div>

            <form className='text-justify mt-5 block ' onSubmit={e => onSubmit(e)}>
                {/*<form className='text-justify mt-5 row' onSubmit={e => onSubmit(e)}>*/}
                <div className='col-lg-5 '>
                    {/*<div className=' '>*/}
                    <div className='col'>
                        <div className='form-floating mb-3'>
                            <input
                                type='text'
                                className="form-control"
                                placeholder="Имя"
                                name='first_name'
                                value={first_name}
                                onChange={e => onChange(e)}
                                required
                            />
                            <label htmlFor="floatingInput">
                                Имя
                            </label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                type='text'
                                className="form-control"
                                placeholder="Фамилия"
                                name='last_name'
                                value={last_name}
                                onChange={e => onChange(e)}
                                required
                            />
                            <label htmlFor="floatingInput">
                                Фамилия
                            </label>
                        </div>
                    </div>


                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                        <label htmlFor="floatingInput">
                            Email
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            className='form-control'
                            type={passShow ? 'text' : 'password'}
                            placeholder='Пароль'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                        <label htmlFor="floatingInput">
                            Пароль
                        </label>
                        <Button
                            sx={{
                                marginTop: -10,
                                marginLeft: 52
                            }}
                            onClick={handlePassShow}
                        >
                            {!passShow ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </Button>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            className='form-control'
                            type={rePassShow ? 'text' : 'password'}
                            placeholder='Пароль'
                            name='re_password'
                            value={re_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                        <label htmlFor="floatingInput">
                            Подтвердите пароль
                        </label>
                        <Button
                            sx={{
                                marginTop: -10,
                                marginLeft: 52
                            }}
                            onClick={handleRePassShow}
                        >
                            {!rePassShow ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </Button>
                    </div>
                </div>
                <div className="me-5 btn_reg">
                    {/*<div className="me-5">*/}
                    <button className='btn btn-primary' type='submit'>
                        <PersonIcon /> Регистрация
                    </button>
                </div>
            </form>

            {/* Кнопки регистрации и вопрос об существовании аккаунта */}
            <div className='text-center mt-5'>
                <br />
                <button className='btn btn-danger mt-2' onClick={continueWithGoogle}>
                    <GoogleIcon /> Войти через Google
                </button>
                <p className='mt-4'>
                    Уже есть аккаунт? <Link to='/login'>Войти</Link>
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);