import React, { useEffect, useState } from "react";

import { edition } from "../../../actions/Editions/edition";
import { connect } from "react-redux";

import NewEdition from "./NewEdition";

import axios from "axios";
import Pagination from "../Pagination/Pagination";
import Loading from "../../Loading/Loading";

import loadingIsFetchingAc from '../../../reducers/Authentication/auth'


const NewEditions = ({ edition }) => {
    const [editions, setEditions] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [editionsPerPage] = useState(10)
    const [countEditions, serCountEditions] = useState()
    const [currentEditions, serCurrentEditions] = useState()

    const [loading, setLoading] = useState(false)

    const totalEditions = async () => {

        const URL = 'http://127.0.0.1:8000/editions/count_editions/'
        const res = await axios.get(URL)
        serCountEditions(res.data)
        setLoading(true)
    }

    // Get current editions
    const indexOfLastEdition = currentPage * editionsPerPage;
    const indexOfFirstEdition = indexOfLastEdition - editionsPerPage;


    const getEditions = async () => {

        const URL = `http://127.0.0.1:8000/editions/`
        const res = await axios.get(URL)
        setEditions(res.data)
        setLoading(true)
    }

    const getCurrentEditions = async () => {
        const URL = `http://127.0.0.1:8000/editions/current_editions/${indexOfFirstEdition}/${indexOfLastEdition}/`
        const res = await axios.get(URL)
        serCurrentEditions(res.data)
        setLoading(true)
    }

    useEffect(() => {
        getCurrentEditions()

        totalEditions()
        getEditions()
        edition()
    }, []);



    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        getCurrentEditions()
    }

    return (
        <div className=''>
            {loading ?
                <div className="">
                    <Pagination
                        editionsPerPage={editionsPerPage}
                        totalEditions={countEditions}
                        paginate={paginate}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        getCurrentEditions={getCurrentEditions}
                    />
                    <NewEdition
                        editions={currentEditions}
                    />
                </div>
                : <Loading />
            }




        </div>
    );
};



const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { edition })(NewEditions);
