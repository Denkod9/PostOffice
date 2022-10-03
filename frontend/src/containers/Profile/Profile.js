import React, { useState, useEffect } from "react";
import Loading from '../Loading/Loading'

import userSvg from "../../assets/imgs/user.svg";

import '../../assets/css/nav_menu.css'
import '../../assets/css/profile.css'

import { connect } from "react-redux";
import { profile } from "../../actions/Profile/profile";
import { Navigate } from "react-router-dom";

import ProfileData from './ProfileData'
import ProfileDataEditMode from './ProfileDataEditMode'


import Box from '@mui/material/Box';
import axios from "axios";


const Profile = ({ isAuthenticated, profile }) => {
    // // Получить пользователя
    // const [user, setUser] = useState()
    // const get_user_profile = async () => {
    //     // const URL = `${process.env.REACT_APP_API_URL}/accounts/get_profile/${localStorage.getItem('id')}/`
    //     const URL = `${process.env.REACT_APP_API_URL}/accounts/get_users/`
    //     const res = await axios.get(URL)
    //     setUser(res.data)

    //     console.log(res.data)
    // }
    const [loading, setLoading] = useState(false)

    // Получить адреса
    const [addressOptions, setAddressOptions] = useState()
    const get_address = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/address/`
        const res = await axios.get(URL)
        setAddressOptions(res.data)
        setLoading(true)
    }

    const [formData, setFormData] = useState({
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        email: localStorage.getItem('email'),
        date_of_birth: localStorage.getItem('date_of_birth'),
        phone: localStorage.getItem('phone'),
        address: localStorage.getItem('address'),

        // subscriberId: 1,
        // first_name: '',
        // last_name: '',
        // email: '',
        // date_of_birth: '',
        // phone: '',
        // address: '',
    });
    const [editMode, setEditMode] = useState(false);
    const { email, first_name, last_name, date_of_birth, phone, address } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        setEditMode(false);
        profile(first_name, last_name, date_of_birth, phone, address);
        console.log(formData);
        window.location.reload()
        setLoading(true)
    };
    const btnCansel = () => {
        setEditMode(false);
    }

    // const editDataSubscriberId = () => {
    //     const userProfile = user[subscriberId - 1]
    //     console.log(userProfile)
    //     setFormData({
    //         subscriberId: userProfile.id,
    //         first_name: userProfile.first_name,
    //         last_name: userProfile.last_name,
    //         email: userProfile.email,
    //         date_of_birth: userProfile.date_of_birth,
    //         phone: userProfile.phone,
    //         address: userProfile.address,
    //     })
    // }

    useEffect(() => {
        // get_user_profile()
        get_address()
        // editDataSubscriberId()
    }, [])

    const getUserFullName = isAuthenticated ?
        localStorage.getItem('first_name') + ' ' +
        localStorage.getItem('last_name') :
        // user.first_name + ' ' + user.last_name :
        'first_name last_name'
    // 'Anonymous'

    // Тестовые функции для тестирования профиля
    const firstNameAnonymous = isAuthenticated ? first_name : 'first_name'
    const lastNameAnonymous = isAuthenticated ? last_name : 'last_name'
    const emailAnonymous = isAuthenticated ? email : 'example@ex.com'
    const dateOfBirthAnonymous = isAuthenticated ? date_of_birth : '0000-00-00'
    const phoneAnonymous = isAuthenticated ? phone : 'phone'
    const AddressAnonymous = isAuthenticated ? address : 'address'

    // if (!isAuthenticated) {
    //     return <Navigate replace to='/' />
    // }
    return (
        <div className='container mt-5'>
            {
                loading ?
                    <div className=''>
                        <Box
                            sx={{
                                marginLeft: 55
                            }}>
                            <div className="nav ">
                                <img className="user_img_start" src={userSvg} alt="user" />
                                <h1>{getUserFullName}</h1>
                            </div>
                        </Box>

                        <br />

                        {editMode ?
                            <ProfileDataEditMode
                                // first_name={first_name}
                                // last_name={last_name}
                                // email={email}
                                addressOptions={addressOptions}
                                first_name={firstNameAnonymous}
                                last_name={lastNameAnonymous}
                                email={emailAnonymous}
                                date_of_birth={dateOfBirthAnonymous}
                                phone={phoneAnonymous}
                                address={AddressAnonymous}
                                onChange={onChange}
                                onSubmit={onSubmit}
                                btnCansel={btnCansel}
                            />
                            :
                            <ProfileData
                                // first_name={first_name}
                                // last_name={last_name}
                                // email={email}
                                first_name={firstNameAnonymous}
                                last_name={lastNameAnonymous}
                                email={emailAnonymous}
                                date_of_birth={dateOfBirthAnonymous}
                                phone={phoneAnonymous}
                                address={AddressAnonymous}
                                handlerEditByProfile={() => setEditMode(true)}
                            />
                        }


                    </div>
                    :
                    <Loading />
            }

        </div>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { profile })(Profile);
// export default Profile;
