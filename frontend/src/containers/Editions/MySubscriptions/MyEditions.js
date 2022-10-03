import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";

import { edition } from "../../../actions/Editions/edition";
import { connect } from "react-redux";

import axios from "axios";
import { Navigate } from "react-router-dom";
import MyEdition from "./MyEdition";

import '../../../assets/css/nav_menu.css'


const MyEditions = ({ isAuthenticated, edition }) => {
    const [loading, setLoading] = useState(false)

    const [posts, setPosts] = useState({
        editions: null
    })
    const [subscription, setSubscription] = useState({
        subscription: null
    })

    useEffect(() => {
        const URL = 'http://127.0.0.1:8000/editions/edition_subscriptions/'
        const apiUrl = 'http://127.0.0.1:8000/editions/'
        axios.get(apiUrl)
            .then((res) => {
                const allPersons = res.data;
                setPosts({
                    editions: allPersons
                })
                setLoading(true)
                // console.log(allPersons)
            })
        axios.get(URL)
            .then((res) => {
                const allPersons = res.data;
                setSubscription({
                    subscription: allPersons
                })
                setLoading(true)
                // console.log(res.data)
            })

        edition()
    }, [setPosts, setSubscription]);

    // if (!isAuthenticated) {
    //     return <Navigate replace to='/' />
    // }

    return (
        <div className='margin_top'>
            {
                loading ?
                    <MyEdition
                        posts={posts.editions}
                        subscription={subscription.subscription}
                    />
                    :
                    <Loading />
            }

        </div>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, { edition })(MyEditions);
// export default Profile;
