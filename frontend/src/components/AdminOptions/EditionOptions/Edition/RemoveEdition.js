import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import ImageListItem from '@mui/material/ImageListItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const RemoveEdition = ({
  editDataEditionId,
  optionEditions,
  optionTypes,
  editionId,
  image,
  index,
  title,
  price,
  edition_type,
  description,
  onChange,
}) => {
  const [img, setImage] = useState(null)

  const imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2)
        setImage(reader.result)
      // setImage(e.target.files[0])
    }

    onChange(e)
    // 
    reader.readAsDataURL(e.target.files[0])
    console.log(e.target.files[0])
  }
  return (
    <div>
      <Box>
        <Box
          sx={{
            width: 350,
            marginTop: 5,
            marginLeft: 20,
          }}>
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
                optionEditions.sort((a, b) => (a.id < b.id ? -1 : 1)).map((editionEdit) =>
                  <option
                    key={editionEdit.id}
                    value={editionEdit.id}
                  >
                    {editionEdit.title}
                  </option>
                )
              }
            </NativeSelect>
          </FormControl>
          <Button
            onClick={editDataEditionId}
          >
            Выбрать
          </Button>
        </Box>
        <div className='mt-2'>
          {/* <div className="text-center">
            <ImageListItem
              sx={{
                left: '35%',
                maxWidth: 200,
                height: 100,
                width: 200,
                border: 1,
                boxShadow: 10,
              }}
            >
              <img
                className='text-center'
                height='200'
                width='200'
                src={img}
                alt='Обложка'
              />
            </ImageListItem>

            <Button
              variant="contained"
              component="label"
              className='mt-3'

            >
              Выберите изображение
              <input
                hidden
                accept="image/*,.png,.jpg,.gif,.web"
                type="file"
                name='image'
                value={image}
                onChange={imageHandler}
              />
            </Button>
          </div> */}
          <Box
            sx={{
              width: 350,
              marginTop: 5,
              marginLeft: 20,
            }}
          >
            <div className="">
              <TextField
                disabled
                type='number'
                fullWidth
                label="Индекс"
                placeholder="00000"
                variant="standard"
                size='small'
                required
                className='me-3'
                name='index'
                value={index}
                onChange={e => onChange(e)}
              />

              <TextField
                disabled
                type='text'
                className='mt-4'
                fullWidth
                label="Название"
                placeholder="Машины"
                variant="standard"
                size='small'
                required
                name='title'
                value={title}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="">
              <FormControl
                fullWidth
                className='mt-4'
              >
                <InputLabel
                  variant="standard"
                >
                  Тип издания
                </InputLabel>
                <NativeSelect
                  disabled
                  name='edition_type'
                  value={edition_type}
                  onChange={e => onChange(e)}
                >
                  {
                    optionTypes.sort((a, b) => (a.id < b.id ? -1 : 1)).map((types) =>
                      <option
                        key={types.id}
                        value={types.id}
                      >
                        {types.type_name}
                      </option>
                    )
                  }
                </NativeSelect>
              </FormControl>

              <TextField
                disabled
                type='number'
                className='mt-4'
                fullWidth
                label="Цена"
                placeholder="00.00"
                variant="standard"
                size='small'
                required
                name='price'
                value={price}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="">
              <TextField
                disabled
                type='text'
                className='mt-4'
                label="Описание"
                fullWidth
                multiline
                rows={2}
                variant="standard"
                required
                name='description'
                value={description}
                onChange={e => onChange(e)}
              />
            </div>
            <br />
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default RemoveEdition