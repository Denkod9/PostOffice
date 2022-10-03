import React, { useState, useEffect, Fragment } from 'react'
import Loading from '../../Loading/Loading'
import Box from '@mui/material/Box';
import axios from "axios";

// Address
import AddAddressForm from '../../Forms/AddressForm/Address/AddAddressForm'
import EditAddressForm from '../../Forms/AddressForm/Address/EditAddressForm'
import RemoveAddressForm from '../../Forms/AddressForm/Address/RemoveAddressForm'
// Street
import AddStreetForm from '../../Forms/AddressForm/Street/AddStreetForm'
import EditStreetForm from '../../Forms/AddressForm/Street/EditStreetForm'
import RemoveStreetForm from '../../Forms/AddressForm/Street/RemoveStreetForm'
// PostOfficeInfo
import AddPOIForm from '../../Forms/AddressForm/PostOfficeInfo/AddPOIForm'
import EditPOIForm from '../../Forms/AddressForm/PostOfficeInfo/EditPOIForm'
import RemovePOIForm from '../../Forms/AddressForm/PostOfficeInfo/RemovePOIForm'

const AddressesTable = () => {
  const [loading, setLoading] = useState(false)

  // Получить все улицы
  const [streets, setStreets] = useState()
  const get_streets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/street/`
    const res = await axios.get(URL)
    setStreets(res.data)
    setLoading(true)
  }
  // Получить все адреса
  const [addresses, setAddresses] = useState()
  const get_addresses = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/address/table/`
    const res = await axios.get(URL)
    setAddresses(res.data)
    setLoading(true)
  }
  // Получить все адреса
  const [POIs, setPOIs] = useState()
  const get_poi = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/address/post_office_info/table/`
    const res = await axios.get(URL)
    setPOIs(res.data)
    setLoading(true)
  }

  useEffect(() => {
    get_addresses()
    get_streets()
    get_poi()
  }, [])


  if (!streets || streets.length === 0)
    // return <p>Нет данных</p>
    return <p></p>

  if (!addresses || addresses.length === 0)
    return <p></p>

  if (!POIs || POIs.length === 0)
    return <p></p>

  return (
    <Fragment>
      {
        loading ?
          <div className='container mt-5'>

            <div>
              <h3>Улицы</h3>
              <Box sx={{ display: 'flex', marginLeft: 45 }} >
                <div className="me-2"><AddStreetForm /></div>
                <div className="me-2"><EditStreetForm /></div>
                <div className="me-2"><RemoveStreetForm /></div>
                <div className="me-2"></div>
              </Box>

              <Box
                sx={{
                  marginTop: 5,
                  height: 500,
                  width: '100%',
                  overflow: 'scroll',
                  // border: 1,
                  boxShadow: 24,
                }}
              >
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Тип улицы</th>
                      <th scope="col">Улица</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      streets.map((edition) =>
                        <tr key={edition.id}>
                          <th>{edition.id}</th>
                          <th>{edition.type_street}</th>
                          <th>{edition.street}</th>

                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </Box>
              <br />
              <hr />
            </div>
            <div className="mt-5">
              <h3>Адреса</h3>
              <Box sx={{ display: 'flex', marginLeft: 45 }} >
                <div className="me-2"><AddAddressForm /></div>
                <div className="me-2"><EditAddressForm /></div>
                <div className="me-2"><RemoveAddressForm /></div>
                <div className="me-2"></div>
              </Box>
              <Box
                sx={{
                  marginTop: 5,
                  height: 500,
                  width: '100%',
                  overflow: 'scroll',
                  // border: 1,
                  boxShadow: 24,
                }}
              >
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Улица</th>
                      <th scope="col">Дом</th>
                      <th scope="col">Квартира</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      addresses.map((edition) =>
                        <tr key={edition.id}>
                          <th>{edition.id}</th>
                          <th>{edition.street}</th>
                          <th>{edition.house}</th>
                          <th>{edition.flat}</th>

                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </Box>
              <br />
              <hr />
            </div>
            <div className="mt-5">
              <h3>Информация о почтовом отделении</h3>
              <Box sx={{ display: 'flex', marginLeft: 45 }} >
                <div className="me-2"><AddPOIForm /></div>
                <div className="me-2"><EditPOIForm /></div>
                <div className="me-2"><RemovePOIForm /></div>
                <div className="me-2"></div>
              </Box>
              <Box
                sx={{
                  marginTop: 5,
                  height: 200,
                  width: '100%',
                  overflow: 'scroll',
                  // border: 1,
                  boxShadow: 24,
                }}
              >
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Название</th>
                      <th scope="col">Адрес</th>
                      <th scope="col">Информация о владельце</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      POIs.map((edition) =>
                        <tr key={edition.id}>
                          <th>{edition.id}</th>
                          <th>{edition.title}</th>
                          <th>{edition.address}</th>
                          <th>{edition.manager_info}</th>

                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </Box>
              <br />
              <br />
              <br />
              <br />
            </div>

          </div>
          :
          <Loading />
      }

    </Fragment>
  )
}

export default AddressesTable