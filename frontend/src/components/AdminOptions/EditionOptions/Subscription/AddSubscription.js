import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const AddSubscription = ({
  optionUsers,
  optionEditions,
  subscriber,
  edition,
  date_of_subscription,
  duration,
  is_subscription,
  onChange
}) => {

  const [checked, setChecked] = useState(is_subscription ? true : false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event)
  };

  return (
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
              optionUsers.sort((a, b) => (a.id < b.id ? -1 : 1)).map((user) =>
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
        <FormControl
          className='mt-4'
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
              optionEditions.sort((a, b) => (a.id < b.id ? -1 : 1)).map((editionGet) =>
                <option
                  key={editionGet.id}
                  value={editionGet.id}
                >
                  {editionGet.title}
                </option>
              )
            }
          </NativeSelect>
        </FormControl>
        <TextField
          type='text'
          fullWidth
          label="Дата подписки"
          placeholder="0000-00-00"
          variant="standard"
          size='small'
          required
          className='mt-4'
          name='date_of_subscription'
          value={date_of_subscription}
          onChange={e => onChange(e)}
        />
        <TextField
          type='number'
          fullWidth
          label="Срок подписки"
          placeholder="(мм)"
          variant="standard"
          size='small'
          required
          className='mt-4'
          name='duration'
          value={duration}
          onChange={e => onChange(e)}
        />
        <div className='mt-4'>
          <label className="form-check-label">
            Подписка
            <input
              className="form-check-input ms-2"
              type="checkbox"
              checked={checked ? is_subscription = true : is_subscription = false}
              name='is_subscription'
              value={is_subscription ? false : true}
              onChange={e => handleChange(e)}
            />
          </label>
        </div>
      </Box>
    </div>
  )
}

export default AddSubscription