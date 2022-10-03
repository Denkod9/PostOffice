import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Checkbox from '@mui/material/Checkbox';

const EditAddress = ({
  editDataAddressId,
  optionAddresses,
  optionStreets,
  addressId,
  streetId,
  house,
  flat,
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
            <Box>
              <FormControl
                fullWidth
                className='mt-4'
              >
                <InputLabel
                  variant="standard"
                >
                  Адрес
                </InputLabel>
                <NativeSelect
                  name='addressId'
                  value={addressId}
                  onChange={e => onChange(e)}
                >
                  {
                    optionAddresses.sort((a, b) => (a.id < b.id ? -1 : 1)).map((address) =>
                      <option
                        key={address.id}
                        value={address.id}
                      >
                        {address.id}
                      </option>
                    )
                  }
                </NativeSelect>
              </FormControl>
              <Button
                onClick={editDataAddressId}
              >
                Выбрать
              </Button>
            </Box>
            <FormControl
              fullWidth
            >
              <InputLabel
                variant="standard"
              >
                Улица
              </InputLabel>
              <NativeSelect
                name='streetId'
                value={streetId}
                onChange={e => onChange(e)}
              >
                {
                  optionStreets.sort((a, b) => (a.id < b.id ? -1 : 1)).map((street) =>
                    <option
                      key={street.id}
                      value={street.id}
                    >
                      {street.street}
                    </option>
                  )
                }
              </NativeSelect>
            </FormControl>
            <TextField
              type='text'
              fullWidth
              label="Номер дома"
              placeholder="0000"
              variant="standard"
              size='small'
              required
              className='mt-4'
              name='house'
              value={house}
              onChange={e => onChange(e)}
            />
            <TextField
              type='number'
              fullWidth
              label="Квартира"
              placeholder="0000"
              variant="standard"
              size='small'
              required
              className='mt-4'
              name='flat'
              value={flat}
              onChange={e => onChange(e)}
            />
          </Box>
        </div>
        <br />
      </Box>
    </div>
  )
}

export default EditAddress