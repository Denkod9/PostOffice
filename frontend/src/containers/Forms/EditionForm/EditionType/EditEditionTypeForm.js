import React, { useState, useEffect } from 'react'
import EditEditionType from '../../../../components/AdminOptions/EditionOptions/EditionType/EditEditionType'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';

import { edit_edition_type } from '../../../../actions/Editions/edition';
import { connect } from "react-redux";
import axios from "axios";

const EditEditionTypeForm = ({ edit_edition_type }) => {
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
    edit_edition_type(editionId, type_name)
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
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить тип издания'
      >
        Изменить тип издания
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h2>Изменить тип издания</h2>}
        onClick={onClick}
        children={
          <EditEditionType
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

export default connect(mapStateToProps, { edit_edition_type })(EditEditionTypeForm);
// export default EditEditionTypeForm