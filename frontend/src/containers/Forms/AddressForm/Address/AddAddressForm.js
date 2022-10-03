import React, { useState, useEffect } from 'react'
import AddAddress from '../../../../components/AdminOptions/AddressOptions/Address/AddAddress'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { add_address } from '../../../../actions/Address/address'
import { connect } from "react-redux";
import axios from "axios";

const AddAddressForm = ({ add_address }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    streetId: '',
    house: '',
    flat: ''
  });

  const { streetId, house, flat } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить всех пользователей
  const [streets, setStreets] = useState()
  const get_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/street/`
    const res = await axios.get(URL)
    setStreets(res.data)
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    add_address(streetId, house, flat)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_streets()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddCircleRoundedIcon />}
        onClick={handleOpen}
        title='Добавить адрес'
      >
        Добавить адрес
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Добавить адрес</h1>}
        onClick={onClick}
        children={
          <AddAddress
            optionStreets={streets}
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

export default connect(mapStateToProps, { add_address })(AddAddressForm);
// export default AddAddressForm