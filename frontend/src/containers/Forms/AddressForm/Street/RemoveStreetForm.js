import React, { useState, useEffect } from 'react'
import RemoveStreet from '../../../../components/AdminOptions/AddressOptions/Street/RemoveStreet'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Button from '@mui/material/Button';

import { delete_street } from '../../../../actions/Address/address';
import { connect } from "react-redux";
import axios from "axios";

const RemoveStreetForm = ({ delete_street }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    streetId: 1,
    type_street: '',
    street: ''
  });

  const { streetId, type_street, street } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Обработчик окна добовления почтальона
  const onClick = () => {
    delete_street(streetId)
    handleClose()
    window.location.reload()
  }

  // Получить улицы
  const [streets, setStreets] = useState()
  const get_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/street/`
    const res = await axios.get(URL)
    setStreets(res.data)
  }

  const editDataStreetId = () => {
    const streetEdit = streets[streetId - 1]
    setFormData({
      streetId: streetEdit.id,
      type_street: streetEdit.type_street,
      street: streetEdit.street
    })
  }

  useEffect(() => {
    get_streets()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<RemoveCircleRoundedIcon />}
        onClick={handleOpen}
        title='Удалить улицу'
      >
        Удалить улицу
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Удалить улицу</h1>}
        onClick={onClick}
        children={
          <RemoveStreet
            editDataStreetId={editDataStreetId}
            optionStreets={streets}
            streetId={streetId}
            type_street={type_street}
            street={street}
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

export default connect(mapStateToProps, { delete_street })(RemoveStreetForm);
// export default RemoveStreetForm