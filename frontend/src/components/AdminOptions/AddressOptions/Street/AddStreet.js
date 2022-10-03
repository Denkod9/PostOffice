import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const AddStreet = ({ type_street, street, onChange }) => {
  return (
    <div>
      <Box
       sx={{
        width: 350,
        marginTop: 5,
        marginLeft: 20,
      }}>
        <TextField
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

export default AddStreet