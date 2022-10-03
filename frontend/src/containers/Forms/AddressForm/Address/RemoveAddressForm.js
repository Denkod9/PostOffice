import React, { useState, useEffect } from 'react'
import RemoveAddress from '../../../../components/AdminOptions/AddressOptions/Address/RemoveAddress'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Button from '@mui/material/Button';

import { delete_address } from '../../../../actions/Address/address';
import { connect } from "react-redux";
import axios from "axios";

const RemoveAddressForm = ({ delete_address }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    addressId: 1,
    streetId: '',
    house: '',
    flat: ''
  });

  const { addressId, streetId, house, flat } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить улицы
  const [streets, setStreets] = useState()
  const get_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/street/`
    const res = await axios.get(URL)
    setStreets(res.data)
  }

  // Получить адреса
  const [addresses, setAddresses] = useState()
  const get_addresses = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/`
    const res = await axios.get(URL)
    setAddresses(res.data)
  }


  const editDataAddressId = () => {
    const address = addresses[addressId - 1]
    const street = streets[streetId - 1]
    setFormData({
      addressId: address.id,
      streetId: address.id,
      house: address.house,
      flat: address.flat
    })
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    delete_address(addressId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_streets()
    get_addresses()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<RemoveCircleRoundedIcon />}
        onClick={handleOpen}
        title='Удалить адрес'
      >
        Удалить адрес
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Удалить адрес</h1>}
        onClick={onClick}
        children={
          <RemoveAddress
            editDataAddressId={editDataAddressId}
            optionAddresses={addresses}
            optionStreets={streets}
            addressId={addressId}
            streetId={streetId}
            house={house}
            flat={flat}
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

export default connect(mapStateToProps, { delete_address })(RemoveAddressForm);
// export default RemoveAddressForm