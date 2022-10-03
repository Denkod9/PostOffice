import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Home from './containers/Home';
import Login from './containers/Authentication/Login';
import Signup from './containers/Authentication/Signup';
import Activate from './containers/Authentication/Activate';
import ResetPassword from './containers/Authentication/ResetPassword';
import ResetPasswordConfirm from './containers/Authentication/ResetPasswordConfirm';
import Google from './containers/Authentication/Google';

import Layout from './hocs/Layout';
import Profile from "./containers/Profile/Profile";

import NewEditions from "./containers/Editions/NewSubscriptions/NewEditions";
import MyEditions from "./containers/Editions/MySubscriptions/MyEditions";

import Operator from "./containers/Operator/Operator";
import Manager from "./containers/Manager/Manager";
import Reports from "./containers/Manager/Reports";

import AccountsTable from './containers/Operator/Tables/AccountsTable'
import AddressesTable from './containers/Operator/Tables/AddressesTable'
import DeliveriesTable from './containers/Operator/Tables/DeliveriesTable'
import DistrictsTable from './containers/Operator/Tables/DistrictsTable'
import EditionsTable from './containers/Operator/Tables/EditionsTable'
import PostmansTable from './containers/Operator/Tables/PostmansTable'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {/* <Route path='/' element={<Home/>}/> */}
                        <Route path='/' element={<NewEditions/>}/>
                        <Route path='/operator' element={<Operator/>}/>

                        <Route path='/manager/accounts' element={<AccountsTable/>}/>
                        <Route path='/manager/addresses' element={<AddressesTable/>}/>
                        <Route path='/operator/deliveries' element={<DeliveriesTable/>}/>
                        <Route path='/operator/districts' element={<DistrictsTable/>}/>
                        <Route path='/manager/editions' element={<EditionsTable/>}/>
                        <Route path='/operator/postmans' element={<PostmansTable/>}/>

                        <Route path='/manager' element={<Manager/>}/>
                        <Route path='/manager/reports' element={<Reports/>}/>
                        {/* <Route path='/editions' element={<NewEditions/>}/> */}
                        <Route path='/my_editions' element={<MyEditions/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/signup' element={<Signup/>}/>
                        <Route path='/google' element={<Google/>}/>
                        <Route path='/reset-password' element={<ResetPassword/>}/>
                        <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>}/>
                        <Route path='/activate/:uid/:token' element={<Activate/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;