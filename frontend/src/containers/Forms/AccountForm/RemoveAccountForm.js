import React, { useState, useEffect } from 'react'

import PersonRemoveAlt1RoundedIcon from '@mui/icons-material/PersonRemoveAlt1Rounded';

import Button from '@mui/material/Button';

import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import RemoveAccount from '../../../components/AdminOptions/AccountsOptions/RemoveAccount';

import { delete_subscriber } from '../../../actions/Accounts/accounts'
import { connect } from "react-redux";
import axios from "axios";

const RemoveAccountForm = ({ delete_subscriber }) => {
  const [formData, setFormData] = useState({
    subscriberId: 1
  });

  const { subscriberId } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Открыть окно добовления издания
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Получить типы изданий
  const [usersOptions, setUsersOptions] = useState()
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/get_users/`
    const res = await axios.get(URL)
    setUsersOptions(res.data)
  }

  // Обработчик окна добовления издания
  const onClick = () => {
    delete_subscriber(subscriberId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_users()
  }, [])
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<PersonRemoveAlt1RoundedIcon />}
        onClick={handleOpen}
        title='Удалить подписчика'
      >
        Удалить подписчика
      </Button>

      {/* Окно добовления издания */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Удалить Подписчика</h1>}
        onClick={onClick}
        children={
          <RemoveAccount
            usersOptions={usersOptions}
            subscriberId={subscriberId}

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

export default connect(mapStateToProps, { delete_subscriber })(RemoveAccountForm);
// export default RemoveAccountForm