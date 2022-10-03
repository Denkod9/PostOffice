import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const RemoveSubscription = ({
  editDataSubscriptionId,
  optionUsers,
  optionEditions,
  optionSubscriptions,
  subscriptionId,
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
        <Box>
          <FormControl
            fullWidth
            className='mt-4'
          >
            <InputLabel
              variant="standard"
            >
              Подписка
            </InputLabel>
            <NativeSelect
              name='subscriptionId'
              value={subscriptionId}
              onChange={e => onChange(e)}
            >
              {
                optionSubscriptions.sort((a, b) => (a.id < b.id ? -1 : 1)).map((subscriptionEdit) =>
                  <option
                    key={subscriptionEdit.id}
                    value={subscriptionEdit.id}
                  >
                    {subscriptionEdit.id}
                  </option>
                )
              }
            </NativeSelect>
          </FormControl>
          <Button
            onClick={editDataSubscriptionId}
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
            Подписчик
          </InputLabel>
          <NativeSelect
            disabled
            className='mt-4'
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
            disabled
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
          disabled
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
          disabled
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
              disabled
              checked={checked ? is_subscription = 1 : is_subscription = 0}
              name='is_subscription'
              value={is_subscription ? 0 : 1}
              onChange={e => handleChange(e)}
            />
          </label>
        </div>
      </Box>
    </div>
  )
}

export default RemoveSubscription