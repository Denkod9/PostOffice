import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Checkbox from '@mui/material/Checkbox';

const RemoveStreet = ({
  editDataStreetId,
  optionStreets,
  streetId,
  type_street,
  street,
  onChange
}) => {
  return (
    <div>
      <Box
        sx={{
          width: 350,
          marginTop: 5,
          marginLeft: 20,
        }}>
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
            
              name='streetId'
              value={streetId}
              onChange={e => onChange(e)}
            >
              {
                optionStreets.sort((a, b) => (a.id < b.id ? -1 : 1)).map((streetEdit) =>
                  <option
                    key={streetEdit.id}
                    value={streetEdit.id}
                  >
                    {streetEdit.street}
                  </option>
                )
              }
            </NativeSelect>
          </FormControl>
          <Button
            onClick={editDataStreetId}
          >
            Выбрать
          </Button>
        </Box>
        <TextField
          disabled
          type='text'
          fullWidth
          label="Тип уилицы"
          placeholder="Бульвар"
          variant="standard"
          size='small'
          required
          className='mt-4'
          name='type_street'
          value={type_street}
          onChange={e => onChange(e)}
        />
        <TextField
          disabled
          type='text'
          fullWidth
          label="Улица"
          placeholder="Васильковская"
          variant="standard"
          size='small'
          required
          className='mt-4'
          name='street'
          value={street}
          onChange={e => onChange(e)}
        />
      </Box>
      <br />
    </div>
  )
}

export default RemoveStreet