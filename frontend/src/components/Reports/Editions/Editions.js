import React, { useState, useEffect } from 'react'
import Loading from '../../../containers/Loading/Loading'

import Box from '@mui/material/Box';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios";


ChartJS.register(ArcElement, Tooltip, Legend);

const Editions = () => {
  const [loading, setLoading] = useState(false)

  // все издания
  const [editionsCount, setUsersCount] = useState()
  const get_count_editions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/count_editions/`
    const res = await axios.get(URL)
    setUsersCount(res.data)
    setLoading(true)
  }
  // подписки за все время
  const [subscriptionsCountAllYears, setSubscriptionsCountAllYears] = useState()
  const get_count_subscriptions_all_years = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/count_subscriptions/all_years/`
    const res = await axios.get(URL)
    setSubscriptionsCountAllYears(res.data)
    setLoading(true)
  }

  useEffect(() => {
    get_count_editions()
    get_count_subscriptions_all_years()
  }, [])

  const data = {
    labels: ['Издания', 'Подписки за все время'],
    datasets: [
      {
        label: '# of Votes',
        data: [editionsCount, subscriptionsCountAllYears],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          // 'rgba(33, 199, 53, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(18, 108, 29, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // Заголовок графика
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      {
        loading ?
          <Box
            sx={{
              width: 400,
              height: 400,
              marginLeft: '38%',
              // marginRight: '50%',
            }}
            className='text-center'
          >
            <Doughnut datasetIdKey='id' data={data} options={options} />
          </Box>
          :
          <Loading />
      }

    </div>
  )
}

export default Editions