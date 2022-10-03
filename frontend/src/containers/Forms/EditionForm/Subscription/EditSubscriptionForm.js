import React, { useState, useEffect } from 'react'
import EditSubscription from '../../../../components/AdminOptions/EditionOptions/Subscription/EditSubscription'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';

import { edit_subscription } from '../../../../actions/Editions/edition';
import { connect } from "react-redux";
import axios from "axios";

const EditSubscriptionForm = ({ edit_subscription }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    subscriptionId: 1,
    subscriber: 1,
    edition: '',
    date_of_subscription: '',
    duration: '',
    is_subscription: '1'
  });

  const { subscriptionId, subscriber, edition, date_of_subscription, duration, is_subscription } = formData;
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
  // Получить всех пользователей
  const [subscriptions, setSubscriptions] = useState()
  const get_subscriptions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/edition_subscription/`
    const res = await axios.get(URL)
    setSubscriptions(res.data)
  }

  const editDataSubscriptionId = () => {
    const subscriptionEdit = subscriptions[subscriptionId - 1]
    setFormData({
      subscriptionId: subscriptionEdit.id,
      subscriber: subscriptionEdit.id,
      edition: subscriptionEdit.edition,
      date_of_subscription: subscriptionEdit.date_of_subscription,
      duration: subscriptionEdit.duration,
      is_subscription: subscriptionEdit.is_subscription
    })
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    edit_subscription(subscriptionId, subscriber, edition, date_of_subscription, duration, is_subscription)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_users()
    get_editions()
    get_subscriptions()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить подписку'
      >
        Изменить подписку
      </Button>
      

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Изменить подписку</h1>}
        onClick={onClick}
        children={
          <EditSubscription
            editDataSubscriptionId={editDataSubscriptionId}
            optionUsers={users}
            optionEditions={editions}
            optionSubscriptions={subscriptions}
            subscriptionId={subscriptionId}
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

export default connect(mapStateToProps, { edit_subscription })(EditSubscriptionForm);
// export default EditSubscriptionForm