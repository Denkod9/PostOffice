import React, { useState, useEffect } from 'react'
import AddStreet from '../../../../components/AdminOptions/AddressOptions/Street/AddStreet'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { add_street } from '../../../../actions/Address/address';
import { connect } from "react-redux";
import axios from "axios";

const AddStreetForm = ({ add_street }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    type_street: '',
    street: ''
  });

  const { type_street, street } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Обработчик окна добовления почтальона
  const onClick = () => {
    add_street(type_street, street)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddCircleRoundedIcon />}
        onClick={handleOpen}
        title='Добавить улицу'
      >
        Добавить улицу
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Добавить улицу</h1>}
        onClick={onClick}
        children={
          <AddStreet
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

export default connect(mapStateToProps, { add_street })(AddStreetForm);
// export default AddStreetForm