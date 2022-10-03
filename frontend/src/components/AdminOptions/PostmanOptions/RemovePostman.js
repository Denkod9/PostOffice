import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from "@mui/material/TextField";



const RemovePostman = ({
  postmansOptions,
  editDataPostmanId,
  postmanId,
  user,
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
              marginLeft: 20,
            }}
          >
            <div className="">
              <Box>
                <FormControl
                  fullWidth
                  className='mt-4'
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
                      postmansOptions.sort((a, b) => (a.id < b.id ? -1 : 1)).map((postman) =>
                        <option
                          key={postman.id}
                          value={postman.id}
                        >
                          {postman.id}
                        </option>
                      )
                    }
                  </NativeSelect>
                </FormControl>
                <Button
                  onClick={editDataPostmanId}
                >
                  Выбрать
                </Button>
              </Box>

            </div>
            <div className='mt-3'>
              <TextField
                disabled
                type='email'
                fullWidth
                label="Email"
                placeholder="example@ex.com"
                variant="standard"
                size='small'
                required
                className='me-3'
                name='user'
                value={user}
                onChange={e => onChange(e)}
              />

              <TextField
                disabled
                type='text'
                fullWidth
                label="Дата найма"
                placeholder="0000-00-00"
                variant="standard"
                size='small'
                required
                className='mt-3'
                name='employment_date'
                value={employment_date}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='mt-4'>
              <label className="form-check-label">
                Район назначен
                <input
                  disabled
                  className="form-check-input ms-2"
                  type="checkbox"
                  name='topicality'
                  value={topicality}
                  onChange={e => onChange(e)}
                />
              </label>

            </div>

            <br />
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default RemovePostman