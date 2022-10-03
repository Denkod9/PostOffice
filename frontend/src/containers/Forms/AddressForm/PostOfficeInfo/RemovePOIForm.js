import React, { useState, useEffect } from 'react'
import RemovePOI from '../../../../components/AdminOptions/AddressOptions/PostOfficeInfo/RemovePOI'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Button from '@mui/material/Button';

import { delete_post_office_info } from '../../../../actions/Address/address';
import { connect } from "react-redux";
import axios from "axios";

const RemovePOIForm = ({delete_post_office_info}) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    poiId: 1,
    title: '',
    address: 1,
    manager_info: ''
  });

  const { poiId, title, address, manager_info } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


  // Получить адреса
  const [addresses, setAddresses] = useState()
  const get_addresses = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/`
    const res = await axios.get(URL)
    setAddresses(res.data)
  }

  const [POIs, setPOIs] = useState()
  const get_post_office_info = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/post_office_info/`
    const res = await axios.get(URL)
    setPOIs(res.data)
  }

  const editDataPOIId = () => {
    const post_office_info = POIs[poiId - 1]
    setFormData({
      poiId: post_office_info.id,
      title: post_office_info.title,
      address: post_office_info.address,
      manager_info: post_office_info.manager_info
    })
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    delete_post_office_info(poiId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_post_office_info()
    get_addresses()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<RemoveCircleRoundedIcon />}
        onClick={handleOpen}
        title='Удалить информацию о почтовом отделении'
      >
        Удалить ИПО
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Удалить ИПО</h1>}
        onClick={onClick}
        children={
          <RemovePOI
          editDataPOIId={editDataPOIId}
            optionAddresses={addresses}
            optionPOIs={POIs}
            poiId={poiId}
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

export default connect(mapStateToProps, { delete_post_office_info })(RemovePOIForm);
// export default RemovePOIForm