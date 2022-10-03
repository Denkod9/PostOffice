import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const EditDistrictStreet = ({
  editDataDistrictStreetId,
  optionDistrictStreets,
  optionPostmans,
  optionStreets,
  districtStreetId,
  postmanId,
  streetId,
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
            <Box>
              <FormControl
                fullWidth
                className='mt-4'
              >
                <InputLabel
                  variant="standard"
                >
                  Улица в участке
                </InputLabel>
                <NativeSelect
                  name='districtStreetId'
                  value={districtStreetId}
                  onChange={e => onChange(e)}
                >
                  {
                    optionDistrictStreets.sort((a, b) => (a.id < b.id ? -1 : 1)).map((district_street) =>
                      <option
                        key={district_street.id}
                        value={district_street.id}
                      >
                        {district_street.id}
                      </option>
                    )
                  }
                </NativeSelect>
              </FormControl>
              <Button
                onClick={editDataDistrictStreetId}
              >
                Выбрать
              </Button>
            </Box>
            <div className="mt-4">
              <FormControl
                fullWidth
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
                    optionPostmans.sort((a, b) => (a.id < b.id ? -1 : 1)).map((postman) =>
                      <option
                        key={postman.id}
                        value={postman.id}
                      >
                        {postman.user}
                      </option>
                    )
                  }
                </NativeSelect>
              </FormControl>
              <br />
              <br />
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
              <br />
              <br />
            </div>
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default EditDistrictStreet