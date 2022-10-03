import React, { useState, useEffect } from 'react'
import RemovePostman from '../../../components/AdminOptions/PostmanOptions/RemovePostman'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'

import PersonRemoveAlt1RoundedIcon from '@mui/icons-material/PersonRemoveAlt1Rounded';
import Button from '@mui/material/Button';

import { remove_postman } from '../../../actions/Postman/postman'
import { connect } from "react-redux";

import axios from "axios";

const RemovePostmanForm = ({ remove_postman }) => {
  // Открыть окно удаления почтальона
  const [openRemovePostman, setOpenRemovePostman] = useState(false);
  const handleOpenRemovePostman = () => setOpenRemovePostman(true);
  const handleCloseRemovePostman = () => setOpenRemovePostman(false);

  const [formData, setFormData] = useState({
    postmanId: 1,
    user: '',
    employment_date: '',
    topicality: '',
  });

  const { postmanId, user, employment_date, topicality } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Получить всех пользователей
  const [postmans, setPostmans] = useState()
  const get_postmans = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/postman/`
    const res = await axios.get(URL)
    setPostmans(res.data)
  }

  useEffect(() => {
    get_postmans()
  }, [])

  // Обработчик окна удаления почтальона
  const onClickRemovePostman = () => {
    remove_postman(postmanId)
    handleCloseRemovePostman()
    window.location.reload()
  }

  // передача данных в форму
  const editDataPostmanId = () => {
    const postmanRes = postmans[postmanId - 1]
    setFormData({
      postmanId: postmanRes.id,
      user: postmanRes.user,
      employment_date: postmanRes.employment_date,
      topicality: postmanRes.topicality
    })
  }

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<PersonRemoveAlt1RoundedIcon />}
        onClick={handleOpenRemovePostman}
        title='Уволить почтальона'
      >
        Уволить почтальона
      </Button>

      {/* Окно удаления почтальона */}
      <ModalWindow
        open={openRemovePostman}
        handleClose={handleCloseRemovePostman}
        title={<h1>Уволить почтальона</h1>}
        onClick={onClickRemovePostman}
        children={
          <RemovePostman
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

export default connect(mapStateToProps, { remove_postman })(RemovePostmanForm);
// export default RemovePostmanForm