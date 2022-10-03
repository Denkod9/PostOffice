import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const RemoveEditionType = ({
  editDataEditionTypeId,
  optionEditionTypes,
  editionId,
  type_name,
  onChange
}) => {
  return (
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
              name='editionId'
              value={editionId}
              onChange={e => onChange(e)}
            >
              {
                optionEditionTypes.sort((a, b) => (a.id < b.id ? -1 : 1)).map((editionType) =>
                  <option
                    key={editionType.id}
                    value={editionType.id}
                  >
                    {editionType.type_name}
                  </option>
                )
              }
            </NativeSelect>
          </FormControl>
          <Button
            onClick={editDataEditionTypeId}
          >
            Выбрать
          </Button>
        </Box>

        <TextField
          disabled
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

export default RemoveEditionType