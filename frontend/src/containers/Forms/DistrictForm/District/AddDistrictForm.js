import React, { useState, useEffect } from 'react'
import AddDistrict from '../../../../components/AdminOptions/DistrictOptions/District/AddDistrict'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { add_district } from '../../../../actions/District/district'
import { connect } from "react-redux";
import axios from "axios";

const AddDistrictForm = ({ add_district }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    number: '',
    title: '',
    districtStreetId: 1
  });

  const { number, title, districtStreetId } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить всех пользователей
  const [districtStreets, setDistrictStreets] = useState()
  const get_district_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/districts/district_street_table/`
    const res = await axios.get(URL)
    setDistrictStreets(res.data)
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    add_district(number, title, districtStreetId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_district_streets()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddCircleRoundedIcon />}
        onClick={handleOpen}
        title='Добавить участок'
      >
        Добавить участок
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Добавить участок</h1>}
        onClick={onClick}
        children={
          <AddDistrict
            optionDistrictStreets={districtStreets}
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

export default connect(mapStateToProps, { add_district })(AddDistrictForm);
// export default AddDistrictForm