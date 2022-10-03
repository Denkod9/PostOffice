import React, { useState, useEffect } from 'react'
import Loading from '../../../containers/Loading/Loading'

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

const Subscriptions = () => {
    const [loading, setLoading] = useState(false)


    // подписки за текущий год
    const [subscriptionsCountCurrentYear, setSubscriptionsCountCurrentYear] = useState()
    const get_count_subscriptions_current_year = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_subscriptions/current_year/`
        const res = await axios.get(URL)
        setSubscriptionsCountCurrentYear(res.data)
        setLoading(true)
    }
    // подписки за прошедший год
    const [subscriptionsCountLastYear, setSubscriptionsCountLastYear] = useState()
    const get_count_subscriptions_last_year = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_subscriptions/last_year/`
        const res = await axios.get(URL)
        setSubscriptionsCountLastYear(res.data)
        setLoading(true)
    }
    // подписки за 2020 год
    const [subscriptionsCount2020Year, setSubscriptionsCount2020Year] = useState()
    const get_count_subscriptions_2020_year = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_subscriptions/2020_year/`
        const res = await axios.get(URL)
        setSubscriptionsCount2020Year(res.data)
        setLoading(true)
    }
    // подписки за 2019 год
    const [subscriptionsCount2019Year, setSubscriptionsCount2019Year] = useState()
    const get_count_subscriptions_2019_year = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_subscriptions/2019_year/`
        const res = await axios.get(URL)
        setSubscriptionsCount2019Year(res.data)
        setLoading(true)
    }
    // подписки за 2018 год
    const [subscriptionsCount2018Year, setSubscriptionsCount2018Year] = useState()
    const get_count_subscriptions_2018_year = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_subscriptions/2018_year/`
        const res = await axios.get(URL)
        setSubscriptionsCount2018Year(res.data)
        setLoading(true)
    }
    // подписки за 2017 год
    const [subscriptionsCount2017Year, setSubscriptionsCount2017Year] = useState()
    const get_count_subscriptions_2017_year = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_subscriptions/2017_year/`
        const res = await axios.get(URL)
        setSubscriptionsCount2017Year(res.data)
        setLoading(true)
    }

    useEffect(() => {
        get_count_subscriptions_current_year()
        get_count_subscriptions_last_year()
        get_count_subscriptions_2020_year()
        get_count_subscriptions_2019_year()
        get_count_subscriptions_2018_year()
        get_count_subscriptions_2017_year()
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
                text: 'Подписки по годам',
            },
        },


    };

    const labels = ['2022', '2021', '2020', '2019', '2018', '2017'];

    const data = {
        labels,
        datasets: [{
            label: 'Всего',
            data: [
                subscriptionsCountCurrentYear,
                subscriptionsCountLastYear,
                subscriptionsCount2020Year,
                subscriptionsCount2019Year,
                subscriptionsCount2018Year,
                subscriptionsCount2017Year,
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
                            //   width: 600,
                            width: '50%',
                            //   height: 500,
                            boxShadow: 24,
                            //   marginLeft: '38%',
                            // marginRight: '50%',
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

export default Subscriptions