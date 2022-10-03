import React, { useState, useEffect } from 'react'
import RemoveDistrict from '../../../../components/AdminOptions/DistrictOptions/District/RemoveDistrict'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Button from '@mui/material/Button';

import { delete_district } from '../../../../actions/District/district';
import { connect } from "react-redux";
import axios from "axios";

const RemoveDistrictForm = ({ delete_district }) => {
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
    delete_district(districtId)
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
        startIcon={<RemoveCircleRoundedIcon />}
        onClick={handleOpen}
        title='Удалить участок'
      >
        Удалить участок
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Удалить участок</h1>}
        onClick={onClick}
        children={
          <RemoveDistrict
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

export default connect(mapStateToProps, { delete_district })(RemoveDistrictForm);
// export default RemoveDistrictForm