import React, { useState, useEffect } from 'react'
import AddPostman from '../../../components/AdminOptions/PostmanOptions/AddPostman'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'

import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import Button from '@mui/material/Button';

import { add_postman } from '../../../actions/Postman/postman'
import { get_all_users } from '../../../actions/Authentication/auth'
import { connect } from "react-redux";
import axios from "axios";

const AddPostmanForm = ({ get_all_users, add_postman }) => {
  // Открыть окно добовления почтальона
  const [openAddPostman, setOpenAddPostman] = useState(false);
  const handleOpenAddPostman = () => setOpenAddPostman(true);
  const handleCloseAddPostman = () => setOpenAddPostman(false);

  // Обработчик окна добовления почтальона
  const onClickAddPostman = () => {
    add_postman(postmanId, employment_date, topicality)
    handleCloseAddPostman()
    window.location.reload()
  }

  const [formData, setFormData] = useState({
    postmanId: 1,
    employment_date: '',
    topicality: 0,
  });

  const { postmanId, employment_date, topicality } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });



  // Получить всех пользователей
  const [users, setUsers] = useState()
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/get_users/`
    const res = await axios.get(URL)
    setUsers(res.data)
  }

  useEffect(() => {
    get_users()
    get_all_users()
  }, [])

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<PersonAddAlt1RoundedIcon />}
        onClick={handleOpenAddPostman}
        title='Добавить почтальона'
      >
        Добавить почтальона
      </Button>

      {/* Окно добовления почтальона */}
      <ModalWindow
        open={openAddPostman}
        handleClose={handleCloseAddPostman}
        title={<h1>Добавить почтальона</h1>}
        onClick={onClickAddPostman}
        children={
          <AddPostman
            optionUsers={users}
            postmanId={postmanId}
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

export default connect(mapStateToProps, { get_all_users, add_postman })(AddPostmanForm);
// export default AddPostmanForm