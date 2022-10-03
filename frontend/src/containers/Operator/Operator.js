import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom";

// Accounts
// import AddAccountForm from '../Forms/AccountForm/AddAccountForm';
// import EditAccountForm from '../Forms/AccountForm/EditAccountForm';
// import RemoveAccountForm from '../Forms/AccountForm/RemoveAccountForm';

// Address
import AddAddressForm from '../Forms/AddressForm/Address/AddAddressForm'
import EditAddressForm from '../Forms/AddressForm/Address/EditAddressForm'
import RemoveAddressForm from '../Forms/AddressForm/Address/RemoveAddressForm'
// Street
import AddStreetForm from '../Forms/AddressForm/Street/AddStreetForm'
import EditStreetForm from '../Forms/AddressForm/Street/EditStreetForm'
import RemoveStreetForm from '../Forms/AddressForm/Street/RemoveStreetForm'
// PostOfficeInfo
import AddPOIForm from '../Forms/AddressForm/PostOfficeInfo/AddPOIForm'
import EditPOIForm from '../Forms/AddressForm/PostOfficeInfo/EditPOIForm'
import RemovePOIForm from '../Forms/AddressForm/PostOfficeInfo/RemovePOIForm'

// Delivery
import AddDeliveryForm from '../Forms/DeliveryForm/AddDeliveryForm'
import EditDeliveryForm from '../Forms/DeliveryForm/EditDeliveryForm'
import RemoveDeliveryForm from '../Forms/DeliveryForm/RemoveDeliveryForm'

// District
import AddDistrictForm from '../Forms/DistrictForm/District/AddDistrictForm'
import EditDistrictForm from '../Forms/DistrictForm/District/EditDistrictForm'
import RemoveDistrictForm from '../Forms/DistrictForm/District/RemoveDistrictForm'
// DistrictStreet
import AddDistrictStreetForm from '../Forms/DistrictForm/DistrictStreet/AddDistrictStreetForm'
import EditDistrictStreetForm from '../Forms/DistrictForm/DistrictStreet/EditDistrictStreetForm'
import RemoveDistrictStreetForm from '../Forms/DistrictForm/DistrictStreet/RemoveDistrictStreetForm'

// Edition
// import AddEditionForm from '../Forms/EditionForm/Edition/AddEditionForm';
// import EditEditionForm from '../Forms/EditionForm/Edition/EditEditionForm'
// import RemoveEditionForm from '../Forms/EditionForm/Edition/RemoveEditionForm'
// EditionType
import AddEditionTypeForm from '../Forms/EditionForm/EditionType/AddEditionTypeForm'
import EditEditionTypeForm from '../Forms/EditionForm/EditionType/EditEditionTypeForm'
import RemoveEditionTypeForm from '../Forms/EditionForm/EditionType/RemoveEditionTypeForm'
// Subscription
import AddSubscriptionForm from '../Forms/EditionForm/Subscription/AddSubscriptionForm'
import EditSubscriptionForm from '../Forms/EditionForm/Subscription/EditSubscriptionForm'
import RemoveSubscriptionForm from '../Forms/EditionForm/Subscription/RemoveSubscriptionForm'

// Postman
import AddPostmanForm from '../Forms/PostmanForm/AddPostmanForm';
import EditPostmanForm from '../Forms/PostmanForm/EditPostmanForm';
import RemovePostmanForm from '../Forms/PostmanForm/RemovePostmanForm'

import AccountsTable from './Tables/AccountsTable'
import AddressesTable from './Tables/AddressesTable'
import DeliveriesTable from './Tables/DeliveriesTable'
import DistrictsTable from './Tables/DistrictsTable'
import EditionsTable from './Tables/EditionsTable'
import PostmansTable from './Tables/PostmansTable'

import { connect } from "react-redux";

import Box from '@mui/material/Box';
import { padding } from '@mui/system';
import axios from "axios";

const Operator = ({isAuthenticated }) => {
  // if (localStorage.getItem('role') === 'SUBSCRIBER' || localStorage.getItem('role') === 'POSTMAN' || !isAuthenticated) {
  //   return <Navigate replace to='/' />
  // }

  return (
    <div className='container'>
      <Box>
        <DeliveriesTable />
        <DistrictsTable />
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

export default connect(mapStateToProps, {})(Operator);
// export default Operator