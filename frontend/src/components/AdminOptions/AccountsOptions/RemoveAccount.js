import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import ImageListItem from '@mui/material/ImageListItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const RemoveAccount = ({ usersOptions, subscriberId, onChange }) => {
  return (
    <div>
      <Box
        sx={{
          width: 350,
          marginLeft: 20,
        }}
      >
        <div>
          <div className="">
            <FormControl
              fullWidth
              className='mt-4'
            >
              <InputLabel
                variant="standard"
              >
                Подписчик
              </InputLabel>
              <NativeSelect
                name='subscriberId'
                value={subscriberId}
                onChange={e => onChange(e)}
              >
                {
                  usersOptions.sort((a, b) => (a.id < b.id ? -1 : 1)).map((user) =>
                    <option
                      key={user.id}
                      value={user.id}
                    >
                      {user.email}
                    </option>
                  )
                }
              </NativeSelect>
            </FormControl>
          </div>
          <br />
        </div>
      </Box>
    </div>
  )
}

export default RemoveAccount