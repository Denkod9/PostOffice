import React, { useState, useEffect } from 'react'
import EditDistrictStreet from '../../../../components/AdminOptions/DistrictOptions/DistrictStreet/EditDistrictStreet'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';

import { edit_district_street } from '../../../../actions/District/district';
import { connect } from "react-redux";
import axios from "axios";

const EditDistrictStreetForm = ({ edit_district_street }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    districtStreetId: 1,
    postmanId: '',
    streetId: ''
  });

  const { districtStreetId, postmanId, streetId } = formData;
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

  // Получить все улицы
  const [districtStreets, setDistrictStreets] = useState()
  const get_district_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/districts/district_street/`
    const res = await axios.get(URL)
    setDistrictStreets(res.data)
  }

  // передача данных в форму
  const editDataDistrictStreetId = () => {
    const district_street = districtStreets[districtStreetId - 1]
    setFormData({
      districtStreetId: district_street.id,
      postmanId: district_street.postman,
      streetId: district_street.id
    })
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    edit_district_street(districtStreetId, postmanId, streetId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_district_streets()
    get_streets()
    get_postmans()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить улицу в участке'
      >
        Изменить улицу в участке
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h2>Изменить улицу в участке</h2>}
        onClick={onClick}
        children={
          <EditDistrictStreet
            editDataDistrictStreetId={editDataDistrictStreetId}
            optionDistrictStreets={districtStreets}
            optionPostmans={postmans}
            optionStreets={streets}
            districtStreetId={districtStreetId}
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

export default connect(mapStateToProps, { edit_district_street })(EditDistrictStreetForm);
// export default EditDistrictStreetForm