import React, { useState, useEffect } from 'react'
import EditDistrict from '../../../../components/AdminOptions/DistrictOptions/District/EditDistrict'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';

import { edit_district } from '../../../../actions/District/district';
import { connect } from "react-redux";
import axios from "axios";

const EditDistrictForm = ({ edit_district }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    districtId: 1,
    number: '',
    title: '',
    districtStreetId: ''
  });

  const { districtId, number, title, districtStreetId } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const [districtStreets, setDistrictStreets] = useState()
  const get_district_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/districts/district_street_table/`
    const res = await axios.get(URL)
    setDistrictStreets(res.data)
  }

  const [districts, setDistricts] = useState()
  const get_districts = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/districts/`
    const res = await axios.get(URL)
    setDistricts(res.data)
  }

  // передача данных в форму
  const editDataDistrictId = () => {
    const district = districts[districtId - 1]
    setFormData({
      districtId: district.id,
      number: district.number,
      title: district.title,
      districtStreetId: district.district_street
    })
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    edit_district(districtId, number, title, districtStreetId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_districts()
    get_district_streets()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить участок'
      >
        Изменить участок
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Изменить участок</h1>}
        onClick={onClick}
        children={
          <EditDistrict
            editDataDistrictId={editDataDistrictId}
            optionDistricts={districts}
            optionDistrictStreets={districtStreets}
            districtId={districtId}
            number={number}
            title={title}
            districtStreetId={districtStreetId}
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

export default connect(mapStateToProps, { edit_district })(EditDistrictForm);
// export default EditDistrictForm