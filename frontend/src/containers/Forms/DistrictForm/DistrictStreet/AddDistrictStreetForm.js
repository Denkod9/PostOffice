import React, { useState, useEffect } from 'react'
import AddDistrictStreet from '../../../../components/AdminOptions/DistrictOptions/DistrictStreet/AddDistrictStreet'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { add_district_street } from '../../../../actions/District/district';
import { connect } from "react-redux";
import axios from "axios";

const AddDistrictStreetForm = ({ add_district_street }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    postmanId: 1,
    streetId: 1
  });

  const { postmanId, streetId } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить всех почтальонов
  const [postmans, setPostmans] = useState()
  const get_postmans = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/postman/`
    const res = await axios.get(URL)
    setPostmans(res.data)
  }

  // Получить все улицы
  const [streets, setStreets] = useState()
  const get_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/street/`
    const res = await axios.get(URL)
    setStreets(res.data)
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    add_district_street(postmanId, streetId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_postmans()
    get_streets()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddCircleRoundedIcon />}
        onClick={handleOpen}
        title='Добваить улицу в участок'
      >
        Добваить улицу в участок
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h2>Добваить улицу в участок</h2>}
        onClick={onClick}
        children={
          <AddDistrictStreet
            optionPostmans={postmans}
            optionStreets={streets}
            postmanId={postmanId}
            streetId={streetId}
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

export default connect(mapStateToProps, { add_district_street })(AddDistrictStreetForm);
// export default AddDistrictStreetForm