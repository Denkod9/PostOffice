import React, { useState, useEffect } from 'react'
import Loading from '../../../containers/Loading/Loading'

import Box from '@mui/material/Box';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios";


ChartJS.register(ArcElement, Tooltip, Legend);

const EditionTypes = () => {
    const [loading, setLoading] = useState(false)

    // Получить все журналы
    const [editionTypeMagazine, setEditionTypeMagazine] = useState()
    const get_edition_type_magazine = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_edition_types/type_magazine/`
        const res = await axios.get(URL)
        setEditionTypeMagazine(res.data)
        setLoading(true)
    }
    // Получить все журналы
    const [editionTypeNewspaper, setEditionTypeNewspaper] = useState()
    const get_edition_type_newspaper = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_edition_types/type_newspaper/`
        const res = await axios.get(URL)
        setEditionTypeNewspaper(res.data)
        setLoading(true)
    }
    // Получить все журналы
    const [editionTypeBook, setEditionTypeBook] = useState()
    const get_edition_type_book = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_edition_types/type_book/`
        const res = await axios.get(URL)
        setEditionTypeBook(res.data)
        setLoading(true)
    }
    // Получить все журналы
    const [editionTypeAlmanac, setEditionTypeAlmanac] = useState()
    const get_edition_type_almanac = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_edition_types/type_almanac/`
        const res = await axios.get(URL)
        setEditionTypeAlmanac(res.data)
        setLoading(true)
    }
    // Получить все журналы
    const [editionTypeCollection, setEditionTypeCollection] = useState()
    const get_edition_type_collection = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_edition_types/type_collection/`
        const res = await axios.get(URL)
        setEditionTypeCollection(res.data)
        setLoading(true)
    }
    // Получить все журналы
    const [editionTypeYearbook, setEditionTypeYearbook] = useState()
    const get_edition_type_yearbook = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_edition_types/type_yearbook/`
        const res = await axios.get(URL)
        setEditionTypeYearbook(res.data)
        setLoading(true)
    }
    // Получить все журналы
    const [editionTypeDirectory, setEditionTypeDirectory] = useState()
    const get_edition_type_directory = async () => {
        const URL = `${process.env.REACT_APP_API_URL}/editions/count_edition_types/type_directory/`
        const res = await axios.get(URL)
        setEditionTypeDirectory(res.data)
        setLoading(true)
    }

    useEffect(() => {
        get_edition_type_magazine()
        get_edition_type_newspaper()
        get_edition_type_book()
        get_edition_type_almanac()
        get_edition_type_collection()
        get_edition_type_yearbook()
        get_edition_type_directory()
    }, [])

    const data = {
        labels: ['Журналы', 'Газеты', 'Книги', 'Альмонах', 'Сборник', 'Ежегодник', 'Справочник'],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    editionTypeMagazine,
                    editionTypeNewspaper,
                    editionTypeBook,
                    editionTypeAlmanac,
                    editionTypeCollection,
                    editionTypeYearbook,
                    editionTypeDirectory
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(33, 199, 53, 1)',
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

export default EditionTypes