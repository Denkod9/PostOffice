import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const AddEditionType = ({ type_name, onChange }) => {
  return (
    <div>
      <Box
        sx={{
          width: 350,
          marginTop: 5,
          marginLeft: 20,
        }}
      >
        <TextField
          type='text'
          fullWidth
          label="Тип издания"
          placeholder="Журнал"
          variant="standard"
          size='small'
          required
          name='type_name'
          value={type_name}
          onChange={e => onChange(e)}
        />
      </Box>
      <br />
    </div>
  )
}

export default AddEditionType