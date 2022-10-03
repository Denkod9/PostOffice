import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/Authentication/auth'
import axios from "axios";

import GoogleIcon from '@mui/icons-material/Google';
import LockPersonIcon from '@mui/icons-material/LockPerson';

import Button from '@mui/material/Button';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import '../../assets/css/nav_menu.css';

const Login = ({ login, isAuthenticated }) => {
    const [passShow, setPassShow] = useState(false)
    const handlePassShow = () => setPassShow(!passShow)

    const [formData, setFormData] = useState({
        email: 'politsa042@gmail.com',
        password: 'TestPassword123'
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
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

    return (
        <div className='container mt-5'>
            <div className="text-center">
                <h1>Вход</h1>
                <p>Войдите в свой аккаунт</p>
            </div>
            <form onSubmit={e => onSubmit(e)}>
                <div className='col-lg-5 block modal__margin__header'>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            // id="floatingInput"
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
                            placeholder='Password'
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
                                marginLeft: 59
                            }}
                            onClick={handlePassShow}
                        >
                            {!passShow ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </Button>
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <button className='btn btn-primary mt-2' type='submit'>
                        <LockPersonIcon />  Войти
                    </button>
                </div>
            </form>

            {/* Кнопки входа */}
            <div className='text-center mt-2'>
                <button className='btn btn-danger' onClick={continueWithGoogle}>
                    <GoogleIcon />  Войти через Google
                </button>
            </div>

            {/* Вопросы о регистрации и смене пароля */}
            <div className="text-center mt-3">
                <label className=''>
                    У Вас ещё нет учётной записи? <Link to='/signup'>Зарегестрироваться</Link>
                </label><br />
                <label className='mt-1'>
                    Забыли пароль? <Link to='/reset-password'>Поменять пароль</Link>
                </label>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

