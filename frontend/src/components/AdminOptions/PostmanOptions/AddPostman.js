import React, { useState } from 'react'


import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ModalWindow from "../../ModalWindow/ModalWindow";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Checkbox from '@mui/material/Checkbox';

const AddPostman = ({
  optionUsers,
  postmanId,
  employment_date,
  topicality,
  onChange
}) => {

  return (
    <div>
      <Box>
        <div>
          <Box
            sx={{
              width: 350,
              marginTop: 5,
              marginLeft: 20,
            }}
          >
            <FormControl
              fullWidth
            >
              <InputLabel
                variant="standard"
              >
                Почтальон
              </InputLabel>
              <NativeSelect
                name='postmanId'
                value={postmanId}
                onChange={e => onChange(e)}
              >
                {
                  optionUsers.sort((a, b) => (a.id < b.id ? -1 : 1)).map((users) =>
                    <option
                      key={users.id}
                      value={users.id}
                    >
                      {users.email}
                    </option>
                  )
                }
              </NativeSelect>
            </FormControl>
            <div className='mt-5'>
              <TextField
                type='text'
                fullWidth
                label="Дата найма"
                placeholder="0000-00-00"
                variant="standard"
                size='small'
                required
                className='me-3'
                name='employment_date'
                value={employment_date}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='mt-5'>
              <label className="form-check-label">
                Занят район
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  name='topicality'
                  value={topicality ? 0 : 1}
                  onChange={e => onChange(e)}
                />

              </label>

            </div>
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default AddPostman