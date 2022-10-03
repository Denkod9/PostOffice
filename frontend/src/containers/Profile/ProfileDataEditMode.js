import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const ProfileDataEditMode = (
    {
        addressOptions,
        first_name,
        last_name,
        email,
        date_of_birth,
        phone,
        address,
        onChange,
        onSubmit,
        btnCansel
    }) => {

    return (
        <div className=''>
            <form className="g-3 mt-5 text-center" onSubmit={e => onSubmit(e)}>
                <Box
                    sx={{
                        width: 450,
                        marginLeft: 55,
                    }}>
                    <Box sx={{ display: 'flex' }}>

                        <TextField
                            type='text'
                            fullWidth
                            label="Имя"
                            placeholder=''
                            variant="standard"
                            size='small'
                            required
                            // className='mt-4'
                            name='first_name'
                            value={first_name}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            type='text'
                            fullWidth
                            label="Фамилия"
                            placeholder=''
                            variant="standard"
                            size='small'
                            required
                            className='ms-4'
                            name='last_name'
                            value={last_name}
                            onChange={e => onChange(e)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: 5 }}>

                        <TextField
                            disabled
                            type='email'
                            fullWidth
                            label="Email"
                            placeholder='name@example.com'
                            variant="standard"
                            size='small'
                            required
                            // className='mt-4'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            type='tel'
                            fullWidth
                            label="Телефон"
                            placeholder='+xxx-xx-xxx-xxx'
                            variant="standard"
                            size='small'
                            required
                            className='ms-4'
                            name='phone'
                            value={phone}
                            onChange={e => onChange(e)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: 5 }}>

                        <TextField
                            type='text'
                            fullWidth
                            label="Дата рождения"
                            placeholder='0000-00-00'
                            variant="standard"
                            size='small'
                            required
                            // className='mt-4'
                            name='date_of_birth'
                            value={date_of_birth}
                            onChange={e => onChange(e)}
                        />
                        {/* <TextField
                            type='text'
                            fullWidth
                            label="Адрес"
                            placeholder=''
                            variant="standard"
                            size='small'
                            required
                            className='ms-4'
                            name='address'
                            value={address}
                            onChange={e => onChange(e)}
                        /> */}
                        <FormControl
                            fullWidth
                            className='ms-3'
                        >
                            <InputLabel
                                variant="standard"
                            >
                                Адрес
                            </InputLabel>
                            <NativeSelect
                                name='address'
                                value={address}
                                onChange={e => onChange(e)}
                            >
                                {
                                    addressOptions.map((addressId) =>
                                        <option
                                            key={addressId.id}
                                            value={addressId.id}
                                        >
                                            {addressId.street}, дом. {addressId.house}, кв.{addressId.flat}
                                        </option>
                                    )
                                }
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </Box>
                
                <div className='mt-5'>
                    <button className='btn btn-primary mt-2' type='submit'>
                        Сохранить изменения <span />
                    </button>
                    <button className='btn btn-danger mt-2 ms-2' onClick={btnCansel}>
                        Отменить <span />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProfileDataEditMode;