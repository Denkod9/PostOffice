import React, { useState } from 'react'

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Checkbox from '@mui/material/Checkbox';

const AddDistrict = ({optionDistrictStreets, number, title, districtStreetId, onChange}) => {
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
            <div className='mt-4'>
            <TextField
                type='number'
                fullWidth
                label="Номер района"
                placeholder="0000"
                variant="standard"
                size='small'
                required
                className='me-3'
                name='number'
                value={number}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='mt-4'>
            <TextField
                type='text'
                fullWidth
                label="Название района"
                placeholder=""
                variant="standard"
                size='small'
                required
                className='me-3'
                name='title'
                value={title}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="mt-4">
              <FormControl
                fullWidth
              >
                <InputLabel
                  variant="standard"
                >
                  Улица
                </InputLabel>
                <NativeSelect
                  name='districtStreetId'
                  value={districtStreetId}
                  onChange={e => onChange(e)}
                >
                  {
                    optionDistrictStreets.sort((a, b) => (a.id < b.id ? -1 : 1)).map((districtStreet) =>
                      <option
                        key={districtStreet.id}
                        value={districtStreet.id}
                      >
                        {districtStreet.street}
                      </option>
                    )
                  }
                </NativeSelect>
              </FormControl>
              <br />
              <br />
            </div>
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default AddDistrict