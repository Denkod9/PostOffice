import React, { useState, useEffect } from 'react'
import AddEditionType from '../../../../components/AdminOptions/EditionOptions/EditionType/AddEditionType'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';

import { save_edition_type } from '../../../../actions/Editions/edition';
import { connect } from "react-redux";
import axios from "axios";

const AddEditionTypeForm = ({save_edition_type}) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    type_name: ''
  });

  const { type_name } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Обработчик окна добовления почтальона
  const onClick = () => {
    save_edition_type(type_name)
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
        title='Добавить тип издания'
      >
        Добавить тип издания
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h2>Добавить тип издания</h2>}
        onClick={onClick}
        children={
          <AddEditionType
            type_name={type_name}
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

export default connect(mapStateToProps, {save_edition_type})(AddEditionTypeForm);
// export default AddEditionTypeForm