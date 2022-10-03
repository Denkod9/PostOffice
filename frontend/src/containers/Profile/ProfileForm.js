import React, { useState, useEffect } from 'react'
import Profile from './Profile'

import Box from '@mui/material/Box';
// import Typography from '@mui/joy/Typography';

import axios from "axios";

const ProfileForm = () => {
  // Получить подписки
  const [subscriptions, setSubscriptions] = useState()
  const get_subscriptions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/subscriptions/profile/${localStorage.getItem('id')}/`
    const res = await axios.get(URL)
    setSubscriptions(res.data)
  }
  // Получить неактивные издания
  const [unsubscriptions, setUnSubscriptions] = useState()
  const get_unsubscriptions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/unsubscriptions/profile/${localStorage.getItem('id')}/`
    const res = await axios.get(URL)
    setUnSubscriptions(res.data)
  }

  useEffect(() => {
    get_subscriptions()
    get_unsubscriptions()
  }, [])

  // const subscriptionResult = () => {
  //   if (subscriptions === 0)
  //     return <p>У вас нет подписок</p>
  //   else
  //     return <p>{subscriptions}</p>
  // }

  // const unsubscriptionResult = () => {
  //   if (unsubscriptions === 0)
  //     return <p>У вас нет неактивных подписок</p>
  //   else
  //     return <p>{unsubscriptions}</p>
  // }



  return (
    <div>
      <Box
        sx={{
          boxShadow: 24,
          height: 150,
          width: '30%',
          borderRadius: 10,
          // marginLeft: ,
          marginTop: '-10%',
          padding: 5
        }}>

        <h4>
          Ваши подписки: {subscriptions}
        </h4>
      </Box>
      <Box
        sx={{
          boxShadow: 24,
          height: 150,
          width: '30%',
          borderRadius: 10,
          marginLeft: 120,
          marginTop: '-12%',
          padding: 5
        }}>
        <h4>
          Неактивные подписки: {unsubscriptions}
        </h4>
      </Box>

    </div>
  )
}

export default ProfileForm