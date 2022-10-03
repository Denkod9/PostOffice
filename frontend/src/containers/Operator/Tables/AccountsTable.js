import React, { useState, useEffect, Fragment } from 'react'
import Loading from '../../Loading/Loading'
import Box from '@mui/material/Box';
import axios from "axios";

// Accounts
import AddAccountForm from '../../Forms/AccountForm/AddAccountForm'
import EditAccountForm from '../../Forms/AccountForm/EditAccountForm'
import RemoveAccountForm from '../../Forms/AccountForm/RemoveAccountForm'

const AccountsTable = () => {
  const [loading, setLoading] = useState(false)

  // Получить всех пользователей
  const [usersGet, setUsersGet] = useState()
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/get_users_table/`
    const res = await axios.get(URL)
    setUsersGet(res.data)
    
    setLoading(true)
  }

  useEffect(() => {
    get_users()
  }, [])


  if (!usersGet || usersGet.length === 0)
    // return <p>Нет данных</p>
    return <p></p>

  return (
    <Fragment>
      {
        loading ?
          <div className='container mt-5'>
            <h3>Подписчики</h3>
            {/* <Box sx={{ display: 'flex', marginLeft: 35, marginBottom: 5 }} >
              <div className="me-2"><AddAccountForm /></div>
              <div className="me-2"><EditAccountForm /></div>
              <div className="me-2"><RemoveAccountForm /></div>
              <div className="me-2"></div>
            </Box> */}

            <Box
              sx={{
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
                    <th scope="col">Email</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Дата рождения</th>
                    <th scope="col">Роль</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Подленность</th>
                    <th scope="col">Сотрудник</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    usersGet.map((edition) =>
                      <tr key={edition.id}>
                        <th>{edition.id}</th>
                        <th>{edition.email}</th>
                        <th>{edition.first_name}</th>
                        <th>{edition.last_name}</th>
                        <th>{edition.date_of_birth}</th>
                        <th>{edition.role}</th>
                        <th>{edition.phone}</th>
                        <th>{edition.address}</th>
                        <th>
                          <input
                            disabled
                            className="form-check-input ms-2"
                            type="checkbox"
                            checked={edition.is_active}
                          />
                        </th>
                        <th>
                          <input
                            disabled
                            className="form-check-input ms-2"
                            type="checkbox"
                            checked={edition.is_staff}
                          />
                        </th>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </Box>
          </div>
          :
          <Loading />
      }

    </Fragment>

  )
}

export default AccountsTable