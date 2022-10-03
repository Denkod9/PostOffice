import React from 'react'

import Box from '@mui/material/Box';
import { Navigate } from "react-router-dom";

import AccountsTable from '../Operator/Tables/AccountsTable'
import AddressesTable from '../Operator/Tables/AddressesTable'
import DeliveriesTable from '../Operator/Tables/DeliveriesTable'
import DistrictsTable from '../Operator/Tables/DistrictsTable'
import EditionsTable from '../Operator/Tables/EditionsTable'
import PostmansTable from '../Operator/Tables/PostmansTable'

import { connect } from "react-redux";

const Manager = ({isAuthenticated}) => {
  // if (localStorage.getItem('role') === 'SUBSCRIBER' || localStorage.getItem('role') === 'POSTMAN' || localStorage.getItem('role') === 'MANAGER' || !isAuthenticated) {
  //   return <Navigate replace to='/' />
  // }
  return (
    <div className='container'>
      <Box>
        <AccountsTable />
        <AddressesTable />
        <DeliveriesTable />
        <DistrictsTable />
        <EditionsTable />
        <PostmansTable />


        <br />
        <br />
        <br />
        <br />
      </Box>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(Manager);
// export default Manager