import React, { useState, useEffect } from 'react'
import EditDelivery from '../../../components/AdminOptions/DeliveryOptions/EditDelivery'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'

import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';

import { edit_delivery } from '../../../actions/Delivery/delivery';
import { connect } from "react-redux";
import axios from "axios";

const EditDeliveryForm = ({ edit_delivery }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    deliveryId: 1,
    subscriber: '',
    edition: '',
    expected: '',
  });

  const { deliveryId, subscriber, edition, expected } = formData;
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

  // Получить все издания
  const [deliveries, setDeliveries] = useState()
  const get_deliveries = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/delivery/`
    const res = await axios.get(URL)
    setDeliveries(res.data)
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    edit_delivery(deliveryId, subscriber, edition, expected)
    handleClose()
    window.location.reload()
  }

  // передача данных в форму
  const editDataDeliveryId = () => {
    const delivery = deliveries[deliveryId - 1]
    setFormData({
      deliveryId: delivery.id,
      subscriber: delivery.subscriber,
      edition: delivery.edition,
      expected: delivery.expected
    })
  }

  useEffect(() => {
    get_users()
    get_editions()
    get_deliveries()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить досатвку'
      >
        Изменить досатвку
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Изменить досатвку</h1>}
        onClick={onClick}
        children={
          <EditDelivery
            editDataDeliveryId={editDataDeliveryId}
            optionUsers={users}
            optionEditions={editions}
            optionDeliveries={deliveries}
            deliveryId={deliveryId}
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

export default connect(mapStateToProps, { edit_delivery })(EditDeliveryForm);
// export default EditDeliveryForm