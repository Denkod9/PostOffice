import React, { useState, useEffect } from 'react'
import AddSubscription from '../../../../components/AdminOptions/EditionOptions/Subscription/AddSubscription'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { add_subscription } from '../../../../actions/Editions/edition';
import { connect } from "react-redux";
import axios from "axios";

const AddSubscriptionForm = ({ add_subscription }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    subscriber: 1,
    edition: 1,
    date_of_subscription: '',
    duration: '',
    is_subscription: 'true'
  });

  const { subscriber, edition, date_of_subscription, duration, is_subscription } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить всех пользователей
  const [users, setUsers] = useState()
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/get_users/`
    const res = await axios.get(URL)
    setUsers(res.data)
  }
  // Получить всех пользователей
  const [editions, setEditions] = useState()
  const get_editions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/`
    const res = await axios.get(URL)
    setEditions(res.data)
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    add_subscription(subscriber, edition, date_of_subscription, duration, is_subscription)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_users()
    get_editions()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddCircleRoundedIcon />}
        onClick={handleOpen}
        title='Добавить подписку'
      >
        Добавить подписку
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Добавить подписку</h1>}
        onClick={onClick}
        children={
          <AddSubscription
            optionUsers={users}
            optionEditions={editions}
            subscriber={subscriber}
            edition={edition}
            date_of_subscription={date_of_subscription}
            duration={duration}
            is_subscription={is_subscription}
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

export default connect(mapStateToProps, { add_subscription })(AddSubscriptionForm);
// export default AddSubscriptionForm