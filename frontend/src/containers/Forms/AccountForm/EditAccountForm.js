import React, { useState, useEffect } from 'react'

import EditSharpIcon from '@mui/icons-material/EditSharp';

import Button from '@mui/material/Button';

import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import EditAccount from '../../../components/AdminOptions/AccountsOptions/EditAccount';

import { edit_subscriber } from '../../../actions/Accounts/accounts'
import { connect } from "react-redux";
import axios from "axios";

const EditAccountForm = ({ edit_subscriber }) => {


  // Получить типы изданий
  const [usersOptions, setUsersOptions] = useState([])
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/get_users/`
    const res = await axios.get(URL)
    setUsersOptions(res.data)
  }

  // Получить типы изданий
  const [addressOptions, setAddressOptions] = useState()
  const get_address = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/`
    const res = await axios.get(URL)
    setAddressOptions(res.data)
  }

  const [formData, setFormData] = useState({
    subscriberId: 1,
    email: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    role: '',
    phone: '',
    address: 1,
    is_active: 1,
    is_staff: 0,
    password: ''
  });

  const editDataSubscriberId = () => {
    const user = usersOptions[subscriberId - 1]
    const addressUser = addressOptions[subscriberId - 1]
    setFormData({
      subscriberId: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      date_of_birth: user.date_of_birth,
      role: user.role,
      phone: user.phone,
      address: addressUser.id,
      is_active: user.is_active,
      is_staff: user.is_staff,
      password: user.password
    })
  }

  const {
    subscriberId,
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

  // Обработчик окна добовления издания
  const onClick = () => {
    edit_subscriber(
      subscriberId,
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
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_users()
    get_address()
  }, [])
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить подписчика'
      >
        Изменить подписчика
      </Button>

      {/* Окно добовления издания */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h2>Изменить Подписчика</h2>}
        onClick={onClick}
        children={
          <EditAccount
            usersOptions={usersOptions}
            optionAddress={addressOptions}
            subscriberId={subscriberId}
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
            editDataSubscriberId={editDataSubscriberId}
          />
        }
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { edit_subscriber })(EditAccountForm);
// export default EditAccountForm