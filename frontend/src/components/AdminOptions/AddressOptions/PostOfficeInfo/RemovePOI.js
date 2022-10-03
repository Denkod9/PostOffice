import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const RemovePOI = ({
  editDataPOIId,
  optionPOIs,
  optionAddresses,
  poiId,
  title,
  address,
  manager_info,
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
            className=''
          >
            <InputLabel
              variant="standard"
            >
              Информация о почтовом отделении
            </InputLabel>
            <NativeSelect
              name='poiId'
              value={poiId}
              onChange={e => onChange(e)}
            >
              {
                optionPOIs.sort((a, b) => (a.id < b.id ? -1 : 1)).map((POI) =>
                  <option
                    key={POI.id}
                    value={POI.id}
                  >
                    {POI.id}
                  </option>
                )
              }
            </NativeSelect>
          </FormControl>
          <Button
            onClick={editDataPOIId}
          >
            Выбрать
          </Button>
        </Box>
        <TextField
          disabled
          type='text'
          fullWidth
          label="Название"
          placeholder=""
          variant="standard"
          size='small'
          required
          className='mt-4'
          name='title'
          value={title}
          onChange={e => onChange(e)}
        />
        <FormControl
          className='mt-4'
          fullWidth
        >
          <InputLabel
            variant="standard"
          >
            Адрес
          </InputLabel>
          <NativeSelect
            disabled
            name='address'
            value={address}
            onChange={e => onChange(e)}
          >
            {
              optionAddresses.sort((a, b) => (a.id < b.id ? -1 : 1)).map((addressEdit) =>
                <option
                  key={addressEdit.id}
                  value={addressEdit.id}
                >
                  {addressEdit.street}
                </option>
              )
            }
          </NativeSelect>
        </FormControl>

        <TextField
          disabled
          type='text'
          fullWidth
          label="Информация о владельце"
          placeholder=""
          variant="standard"
          size='small'
          required
          multiline
          className='mt-4'
          name='manager_info'
          value={manager_info}
          onChange={e => onChange(e)}
        />
      </Box>
      <br />
    </div>
  )
}

export default RemovePOI