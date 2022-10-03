import React, { useState, useEffect } from 'react'
import PostmanReport from '../../components/Reports/PostmanReport';
import UsersReport from '../../components/Reports/UsersReport';
import Subscriptions from '../../components/Reports/Editions/Subscriptions';
import Editions from '../../components/Reports/Editions/Editions';
import EditionPrice from '../../components/Reports/Editions/EditionPrice';
import EditionTypes from '../../components/Reports/Editions/EditionTypes';

import Box from '@mui/material/Box';
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";

const Reports = ({isAuthenticated}) => {
  // if (localStorage.getItem('role') === 'SUBSCRIBER' || localStorage.getItem('role') === 'POSTMAN' || localStorage.getItem('role') === 'MANAGER' || !isAuthenticated) {
  //   return <Navigate replace to='/' />
  // }

  return (
    <div>
      <Box
        sx={{
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        <h3 className='text-center mt-3'>Отчеты</h3>
      </Box>

      <Box
        sx={{
          marginTop: 5,
          marginLeft: 30,
        }}>
        <div><Subscriptions /></div>
        <Box sx={{ marginLeft: 70, marginTop: -50 }} >
          <div><Editions /></div>

        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 6,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 6,
        }}>
        <hr />

      </Box>

      <Box
        sx={{
          marginTop: 5,
          marginLeft: 30,
        }}
      >
        <UsersReport />

        <Box sx={{ marginLeft: 70, marginTop: -50 }} >
          <div><PostmanReport /></div>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: 6,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 6,
        }}>
        <hr />

      </Box>
      <Box
        sx={{
          marginTop: 5,
          marginLeft: 30,
        }}>
        <EditionPrice />
        <Box sx={{ marginLeft: 70, marginTop: -50 }} >
          <div><EditionTypes /></div>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Reports);
// export default Reports