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

const EditionPrice = () => {
    const [loading, setLoading] = useState(false)

    // цены на издание от 100 до 1000
    const [editionsPrice100_1000, setEditionsPrice100_1000] = useState()
    const get_editions_price_100_1000 = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_editions/price100_1000/`
        const res = await axios.get(URL)
        setEditionsPrice100_1000(res.data)
        setLoading(true)
    }

    // цены на издание от 1000 до 3000
    const [editionsPrice1000_3000, setEditionsPrice1000_3000] = useState()
    const get_editions_price_1000_3000 = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_editions/price1000_3000/`
        const res = await axios.get(URL)
        setEditionsPrice1000_3000(res.data)
        setLoading(true)
    }

    // цены на издание от 3000 до 5000
    const [editionsPrice3000_5000, setEditionsPrice3000_5000] = useState()
    const get_editions_price_3000_5000 = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_editions/price3000_5000/`
        const res = await axios.get(URL)
        setEditionsPrice3000_5000(res.data)
        setLoading(true)
    }

    // цены на издание от 5000 до 10000
    const [editionsPrice5000_10000, setEditionsPrice5000_10000] = useState()
    const get_editions_price_5000_10000 = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_editions/price5000_10000/`
        const res = await axios.get(URL)
        setEditionsPrice5000_10000(res.data)
        setLoading(true)
    }


    useEffect(() => {
        get_editions_price_100_1000()
        get_editions_price_1000_3000()
        get_editions_price_3000_5000()
        get_editions_price_5000_10000()
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },

            title: {
                display: true,
                text: 'По возростанию цены на издание',
            },
        },


    };

    const labels = ['100-1000', '1000-3000', '3000-5000', '5000-10000'];

    const data = {
        labels,
        datasets: [{
            label: 'Всего',
            data: [
                editionsPrice100_1000,
                editionsPrice1000_3000,
                editionsPrice3000_5000,
                editionsPrice5000_10000,
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

export default EditionPrice