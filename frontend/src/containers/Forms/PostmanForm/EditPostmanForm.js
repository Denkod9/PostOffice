import React, { useState, useEffect } from 'react'
import EditPostman from '../../../components/AdminOptions/PostmanOptions/EditPostman'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'

import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';

import { edit_postman } from '../../../actions/Postman/postman'
import { connect } from "react-redux";
import axios from "axios";

const EditPostmanForm = ({ edit_postman }) => {
  // Открыть окно добовления почтальона
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    postmanId: 1,
    user: '',
    employment_date: '',
    topicality: '',
  });

  const { postmanId, user, employment_date, topicality } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


  // Обработчик окна добовления почтальона
  const onClick = () => {
    edit_postman(postmanId, user, employment_date, topicality)
    handleClose()
    window.location.reload()
  }


  // Получить всех пользователей
  const [postmans, setPostmans] = useState()
  const get_postmans = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/postman/`
    const res = await axios.get(URL)
    setPostmans(res.data)
  }

  // передача данных в форму
  const editDataPostmanId = () => {
    const postmanRes = postmans[postmanId-1]
    setFormData({
      postmanId: postmanRes.id,
      user: postmanRes.user,
      employment_date: postmanRes.employment_date,
      topicality: postmanRes.topicality
    })
  }

  useEffect(() => {
    get_postmans()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EditSharpIcon />}
        onClick={handleOpen}
        title='Изменить почтальона'
      >
        Изменить почтальона
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={open}
        handleClose={handleClose}
        title={<h1>Изменить почтальона</h1>}
        onClick={onClick}
        children={
          <EditPostman
            postmansOptions={postmans}
            editDataPostmanId={editDataPostmanId}
            postmanId={postmanId}
            user={user}
            employment_date={employment_date}
            topicality={topicality}
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

export default connect(mapStateToProps, { edit_postman })(EditPostmanForm);
// export default EditPostmanForm