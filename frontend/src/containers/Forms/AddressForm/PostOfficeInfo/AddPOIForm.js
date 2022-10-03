import React, { useState, useEffect } from 'react'
import AddPOI from '../../../../components/AdminOptions/AddressOptions/PostOfficeInfo/AddPOI'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { add_post_office_info } from '../../../../actions/Address/address';
import { connect } from "react-redux";
import axios from "axios";

const AddPOIForm = ({ add_post_office_info }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    title: '',
    address: 1,
    manager_info: ''
  });

  const { title, address, manager_info } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить адреса
  const [addresses, setAddresses] = useState()
  const get_addresses = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/`
    const res = await axios.get(URL)
    setAddresses(res.data)
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    add_post_office_info(title, address, manager_info)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_addresses()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddCircleRoundedIcon />}
        onClick={handleOpen}
        title='Добавить информацию о почтовом отделении'
      >
        Добавить ИПО
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Добавить ИПО</h1>}
        onClick={onClick}
        children={
          <AddPOI
          optionAddresses={addresses}
            title={title}
            address={address}
            manager_info={manager_info}
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

export default connect(mapStateToProps, { add_post_office_info })(AddPOIForm);
// export default AddPOIForm