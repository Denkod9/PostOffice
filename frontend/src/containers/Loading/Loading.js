import React, { useState, useEffect } from 'react'

import '../../assets/css/loading.css';

import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {

    return (
        <>
            <div className='loading'>
                <BounceLoader
                    color={"#36d7b7"}

                    // loading={loading}
                    // cssOverride={override}
                    size={60}
                    speedMultiplier='1'
                />
            </div>
            {

                // loading ?

                // :
                // <div className="">
                // </div>
            }
        </>
    )
}

export default Loading