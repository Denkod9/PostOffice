import React, { useState, useEffect, Fragment } from 'react'
import Loading from '../../Loading/Loading'
import Box from '@mui/material/Box';
import axios from "axios";

// Postman
import AddPostmanForm from '../../Forms/PostmanForm/AddPostmanForm';
import EditPostmanForm from '../../Forms/PostmanForm/EditPostmanForm';
import RemovePostmanForm from '../../Forms/PostmanForm/RemovePostmanForm'

const PostmansTable = () => {
  const [loading, setLoading] = useState(false)

  // Получить всех пользователей
  const [usersGet, setUsersGet] = useState()
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/postman/`
    const res = await axios.get(URL)
    setUsersGet(res.data)
    setLoading(true)
  }

  useEffect(() => {
    get_users()
  }, [])


  if (!usersGet || usersGet.length === 0)
    return <p></p>

  return (
    <Fragment>
      {
        loading ?
          <div className='container mt-5'>
            <div>
              <h3>Почтальоны</h3>
              <Box sx={{ display: 'flex', marginLeft: 35 }} >
                <div className="me-2"><AddPostmanForm /></div>
                <div className="me-2"><EditPostmanForm /></div>
                <div className="me-2"><RemovePostmanForm /></div>
              </Box>
              <Box
                sx={{
                  marginTop: 5,
                  height: 500,
                  width: '100%',
                  overflow: 'scroll',
                  // border: 1,
                  boxShadow: 24,
                }}
              >
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Сотрудник</th>
                      <th scope="col">Дата найма</th>
                      <th scope="col">Назначен район</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      usersGet.map((edition) =>
                        <tr key={edition.id}>
                          <th>{edition.id}</th>
                          <th>{edition.user}</th>
                          <th>{edition.employment_date}</th>
                          <th>
                            <input
                              disabled
                              className="form-check-input ms-2"
                              type="checkbox"
                              checked={edition.topicality}
                            />
                          </th>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </Box>
            </div>

          </div>
          :
          <Loading />
      }

    </Fragment>
  )
}

export default PostmansTable