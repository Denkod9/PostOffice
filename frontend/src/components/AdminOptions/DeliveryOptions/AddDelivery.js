import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ModalWindow from "../../ModalWindow/ModalWindow";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Checkbox from '@mui/material/Checkbox';

const AddDelivery = ({
  optionUsers,
  optionEditions,
  subscriber,
  edition,
  expected,
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
                Подписчик
              </InputLabel>
              <NativeSelect
                name='subscriber'
                value={subscriber}
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
            <div className="mt-4">
              <FormControl
                fullWidth
              >
                <InputLabel
                  variant="standard"
                >
                  Издание
                </InputLabel>
                <NativeSelect
                  name='edition'
                  value={edition}
                  onChange={e => onChange(e)}
                >
                  {
                    optionEditions.sort((a, b) => (a.id < b.id ? -1 : 1)).map((edition) =>
                      <option
                        key={edition.id}
                        value={edition.id}
                      >
                        {edition.title}
                      </option>
                    )
                  }
                </NativeSelect>
              </FormControl>
            </div>
            <div className='mt-5'>
              <label className="form-check-label">
              Посылка ожидается
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  name='expected'
                  value={expected ? 0 : 1}
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

export default AddDelivery