import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import ImageListItem from '@mui/material/ImageListItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AddAccount = ({
  optionAddress,
  email,
  first_name,
  last_name,
  date_of_birth,
  role,
  phone,
  address,
  is_active,
  is_staff,
  password,
  onChange
}) => {
  const [passShow, setPassShow] = useState(false)
  const handlePassShow = () => setPassShow(!passShow)

  return (
    <div>
      <Box>
        <div>
          <Box
            sx={{
              width: 350,
              marginLeft: 20,
            }}
          >
            <div className="">
              <TextField
                type='email'
                fullWidth
                label="Email"
                placeholder="example@ex.com"
                variant="standard"
                size='small'
                required
                className='me-3'
                name='email'
                value={email}
                onChange={e => onChange(e)}
              />

              <TextField
                type='text'
                className='mt-3'
                fullWidth
                label="Имя"
                placeholder="Михаил"
                variant="standard"
                size='small'
                required
                name='first_name'
                value={first_name}
                onChange={e => onChange(e)}
              />

              <TextField
                type='text'
                className='mt-3'
                fullWidth
                label="Фамилия"
                placeholder="Иванов"
                variant="standard"
                size='small'
                required
                name='last_name'
                value={last_name}
                onChange={e => onChange(e)}
              />

              <TextField
                type='text'
                fullWidth
                label="Дата рождения"
                placeholder="0000-00-00"
                variant="standard"
                size='small'
                required
                className='mt-3'
                name='date_of_birth'
                value={date_of_birth}
                onChange={e => onChange(e)}
              />
              <FormControl
                fullWidth
                className='mt-3'
              >
                <InputLabel
                  variant="standard"
                >
                  Роль
                </InputLabel>
                <NativeSelect
                  name='role'
                  value={role}
                  // defaultValue={'SUBSCRIBER'}
                  onChange={e => onChange(e)}
                >
                  <option value={'SUBSCRIBER'}>Подписчик</option>
                  <option value={'POSTMAN'}>Почтальон</option>
                  <option value={'OPERATOR'}>Оператор</option>
                  <option value={'MANAGER'}>Менеджер</option>
                </NativeSelect>
              </FormControl>

              <TextField
                type='tel'
                className='mt-3'
                fullWidth
                label="Телефон"
                placeholder="+xxx-xx-xxxx-xxx"
                variant="standard"
                size='small'
                required
                name='phone'
                value={phone}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="">
              <FormControl
                fullWidth
                className='mt-3'
              >
                <InputLabel
                  variant="standard"
                >
                  Адрес
                </InputLabel>
                <NativeSelect
                  name='address'
                  value={address}
                  onChange={e => onChange(e)}
                >
                  {
                    optionAddress.sort((a, b) => (a.id < b.id ? -1 : 1)).map((addressId) =>
                      <option
                        key={addressId.id}
                        value={addressId.id}
                      >
                        {addressId.street}, дом. {addressId.house}, кв.{addressId.flat}
                      </option>
                    )
                  }
                </NativeSelect>
              </FormControl>


            </div>
            <div className='mt-4'>
              <label className="form-check-label">
                Активирован аккаунт
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  name='is_active'
                  value={is_active ? 0 : 1}
                  onChange={e => onChange(e)}
                />
              </label>

            </div>
            <div className='mt-4'>
              <label className="form-check-label">
                Сотрудник
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  name='is_staff'
                  value={is_staff ? 0 : 1}
                  onChange={e => onChange(e)}
                />
              </label>
            </div>


            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                type={passShow ? 'text' : 'password'}
                className='mt-3'
                fullWidth
                label="Пароль"
                placeholder=""
                variant="standard"
                size='small'
                required
                name='password'
                value={password}
                onChange={e => onChange(e)}

              />
              <Button
                onClick={handlePassShow}
              >
                {!passShow ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </Button>
            </Box>
            <br />
            <br />
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default AddAccount