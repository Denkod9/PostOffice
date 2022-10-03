import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


const Home = () => {
    const [subscribers, setSubscribers] = useState()

    const countSubscribers = async () => {
        const URL = 'http://127.0.0.1:8000/accounts/count_subscribers/'
        const res = await axios.get(URL)
        setSubscribers(res.data)
    }

    useEffect(() => {
        countSubscribers()
    },[])

    // Узнать сколько всего подписчиков
    const calc_subscribers = () => {
        alert(`Подписчиков: ${subscribers}`)
    }

    return(
        <div className='container'>
            <div className='jumbotron mt-5'>
                <h1 className='display-4'>Welcome to Post Office!</h1>
                <p className='lead'>This is an incredible authentication system with production level features!</p>
                <hr className='my-4' />
                <p>Click the Log In button</p>
                <Link className='btn btn-primary btn-lg'  to='/login' role='button' data-toggle="modal" data-target=".bd-example-modal-lg">Login</Link>
                <button className='btn btn-success' onClick={calc_subscribers}>Сколько подписчиков</button>
            </div>
        </div>
    );
};

export default Home;
