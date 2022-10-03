import React, { useState, useEffect } from 'react'
import Loading from '../../containers/Loading/Loading'

import Box from '@mui/material/Box';
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UsersReport = () => {
  const [loading, setLoading] = useState(false)

  // подписчики от 17-20
  const [subscribersOlds17_20, setSubscribersOlds17_20] = useState()
  const get_subscribers_olds_17_20 = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/count_subscribers/olds17_20/`
    const res = await axios.get(URL)
    setSubscribersOlds17_20(res.data)
    setLoading(true)
  }
  // подписчики от 20-30
  const [subscribersOlds20_30, setSubscribersOlds20_30] = useState()
  const get_subscribers_olds_20_30 = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/count_subscribers/olds20_30/`
    const res = await axios.get(URL)
    setSubscribersOlds20_30(res.data)
    setLoading(true)
  }
  // подписчики от 30-40
  const [subscribersOlds30_40, setSubscribersOlds30_40] = useState()
  const get_subscribers_olds_30_40 = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/accounts/count_subscribers/olds30_40/`
    const res = await axios.get(URL)
    setSubscribersOlds30_40(res.data)
    setLoading(true)
  }

  useEffect(() => {
    get_subscribers_olds_17_20()
    get_subscribers_olds_20_30()
    get_subscribers_olds_30_40()
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top',
        display: false,
      },

      title: {
        display: true,
        text: 'Подписчики по возростам',
      },
    },


  };

  const labels = ['17-20', '20-30', '30-40'];

  const data = {
    labels,
    datasets: [{
      label: 'Всего',
      data: [
        subscribersOlds17_20,
        subscribersOlds20_30,
        subscribersOlds30_40,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1

    }
    ],

  };

  return (
    <div>
      {
        loading ?
          <Box
            sx={{
              width: '50%',
              boxShadow: 24,
            }}
            className='text-center'
          >
            <Bar options={options} data={data} />

          </Box>
          :
          <Loading />
      }

    </div>
  )
}

export default UsersReport