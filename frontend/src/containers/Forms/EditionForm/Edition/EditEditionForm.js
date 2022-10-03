import React, { useState, useEffect } from 'react'
import EditEdition from '../../../../components/AdminOptions/EditionOptions/Edition/EditEdition'
import ModalWindow from '../../../../components/ModalWindow/ModalWindow'

import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';

import { edit_edition } from '../../../../actions/Editions/edition';
import { connect } from "react-redux";
import axios from "axios";

const EditEditionForm = ({ edit_edition }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    editionId: 1,
    image: 'default.png',
    index: '',
    title: '',
    price: '',
    edition_type: 1,
    description: ''
  });

  const { editionId, image, index, title, price, edition_type, description } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить типы изданий
  const [editionTypes, setEditionTypes] = useState()
  const get_edition_types = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/edition_types/`
    const res = await axios.get(URL)
    setEditionTypes(res.data)
  }

  // Получить адреса
  const [editions, setEditions] = useState()
  const get_editions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/`
    const res = await axios.get(URL)
    setEditions(res.data)
  }

  const editDataEditionId = () => {
    const edition = editions[editionId - 1]
    setFormData({
      editionId: edition.id,
      image: edition.image,
      index: edition.index,
      title: edition.title,
      price: edition.price,
      edition_type: edition.edition_type,
      description: edition.description
    })
  }

  // Обработчик окна добовления почтальона
  const onClick = () => {
    edit_edition(editionId, image, index, title, price, edition_type, description)
    handleClose()
    window.location.reload()
  }

  useEffect(() => {
    get_edition_types()
    get_editions()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить издание'
      >
        Изменить издание
      </Button>

      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Изменить издание</h1>}
        onClick={onClick}
        children={
          <EditEdition
            editDataEditionId={editDataEditionId}
            optionEditions={editions}
            optionTypes={editionTypes}
            editionId={editionId}
            image={image}
            index={index}
            title={title}
            price={price}
            edition_type={edition_type}
            description={description}
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

export default connect(mapStateToProps, { edit_edition })(EditEditionForm);
// export default EditEditionForm