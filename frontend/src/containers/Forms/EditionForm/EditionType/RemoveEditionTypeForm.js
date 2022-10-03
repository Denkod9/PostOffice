import React, { useState, useEffect } from 'react'
import RemoveEditionType from '../../../../components/AdminOptions/EditionOptions/EditionType/RemoveEditionType'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Button from '@mui/material/Button';

import { delete_edition_type } from '../../../../actions/Editions/edition';
import { connect } from "react-redux";
import axios from "axios";

const RemoveEditionTypeForm = ({ delete_edition_type }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    editionId: 1,
    type_name: '',
  });

  const { editionId, type_name } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить типы изданий
  const [editionTypes, setEditionTypes] = useState()
  const get_edition_types = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/edition_types/`
    const res = await axios.get(URL)
    setEditionTypes(res.data)
  }

  const editDataEditionTypeId = () => {
    const editionType = editionTypes[editionId - 1]
    setFormData({
      editionId: editionType.id,
      type_name: editionType.type_name
    })
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    delete_edition_type(editionId)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_edition_types()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<RemoveCircleRoundedIcon />}
        onClick={handleOpen}
        title='Удалить тип издания'
      >
        Удалить тип издания
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h2>Удалить тип издания</h2>}
        onClick={onClick}
        children={
          <RemoveEditionType
            editDataEditionTypeId={editDataEditionTypeId}
            optionEditionTypes={editionTypes}
            editionId={editionId}
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

export default connect(mapStateToProps, { delete_edition_type })(RemoveEditionTypeForm);
// export default RemoveEditionTypeForm