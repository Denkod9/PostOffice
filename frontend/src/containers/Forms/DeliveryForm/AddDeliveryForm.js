import React, { useState, useEffect } from 'react'
import AddDelivery from '../../../components/AdminOptions/DeliveryOptions/AddDelivery'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { add_delivery } from '../../../actions/Delivery/delivery';
import { connect } from "react-redux";
import axios from "axios";

const AddDeliveryForm = ({add_delivery}) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    subscriber: 1,
    edition: 1,
    expected: 0,
  });

  const { subscriber, edition, expected } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить всех пользователей
  const [users, setUsers] = useState()
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/get_users/`
    const res = await axios.get(URL)
    setUsers(res.data)
  }

  // Получить все издания
  const [editions, setEditions] = useState()
  const get_editions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/`
    const res = await axios.get(URL)
    setEditions(res.data)
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    add_delivery(subscriber, edition, expected)
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
        title='Добавить досатвку'
      >
        Добавить досатвку
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Добавить досатвку</h1>}
        onClick={onClick}
        children={
          <AddDelivery
            optionUsers={users}
            optionEditions={editions}
            subscriber={subscriber}
            edition={edition}
            expected={expected}
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

export default connect(mapStateToProps, {add_delivery})(AddDeliveryForm);
// export default AddDeliveryForm