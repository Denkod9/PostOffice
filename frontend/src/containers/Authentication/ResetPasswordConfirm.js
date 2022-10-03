import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../actions/Authentication/auth';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
    const [passShow, setPassShow] = useState(false)
    const handlePassShow = () => setPassShow(!passShow)

    const [rePassShow, setRePassShow] = useState(false)
    const handleRePassShow = () => setRePassShow(!rePassShow)

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const uid = useParams().uid;
    const token = useParams().token;

    const onSubmit = e => {
        e.preventDefault();


        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate replace to='/' />
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type={passShow ? 'text' : 'password'}
                            placeholder='New Password'
                            name='new_password'
                            value={new_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                        <Button
                            sx={{
                                marginTop: -8,
                                marginLeft: 155
                            }}
                            onClick={handlePassShow}
                        >
                            {!passShow ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </Button>
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type={rePassShow ? 'text' : 'password'}
                            placeholder='Confirm New Password'
                            name='re_new_password'
                            value={re_new_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                        <Button
                            sx={{
                                marginTop: -8,
                                marginLeft: 155
                            }}
                            onClick={handleRePassShow}
                        >
                            {!rePassShow ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </Button>
                    </div>
                <button className='btn btn-primary' type='submit'>Поменять пароль</button>
            </form >
        </div >
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);