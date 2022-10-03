import React from 'react';
import ProfileForm from './ProfileForm'

import Box from '@mui/material/Box';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const ProfileData = (
    {
        first_name,
        last_name,
        email,
        date_of_birth,
        phone,
        address,
        handlerEditByProfile
    }) => {

    return (
        <div>
            <Box
                sx={{
                    
                }}>
                <form onSubmit={handlerEditByProfile}  className='text-center'>
                    <div>
                        <div className="mb-3">
                            <div className=''>
                                <h4>Имя: <label> {first_name} </label></h4>
                            </div>
                            <div className='mt-1'>
                                <h4>Фамилия: <label htmlFor="">{last_name}</label></h4>
                            </div>
                            <div className='mt-1'>
                                <h4>Email: <a href={email} target="_blank">{email}</a></h4>
                            </div>
                            <div className='mt-1'>
                                <h4>Дата рождения: <label htmlFor="">{date_of_birth}</label></h4>
                            </div>
                            <div className='mt-1'>
                                <h4>Мобильный телефон: <label>{phone}</label></h4>
                            </div>
                            <div>
                                <h4>Адрес: <label>{address}</label></h4>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-5'>
                        <button className='btn btn-primary mt-2' type='submit'>
                            Редактировать <span />
                            <BorderColorIcon />
                        </button>
                    </div>
                </form>
            </Box>

            <ProfileForm />
        </div>
    );
}

export default ProfileData;