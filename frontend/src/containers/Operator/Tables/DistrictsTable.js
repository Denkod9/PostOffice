import React, { useState, useEffect, Fragment } from 'react'
import Loading from '../../Loading/Loading'
import Box from '@mui/material/Box';
import axios from "axios";

// District
import AddDistrictForm from '../../Forms/DistrictForm/District/AddDistrictForm'
import EditDistrictForm from '../../Forms/DistrictForm/District/EditDistrictForm'
import RemoveDistrictForm from '../../Forms/DistrictForm/District/RemoveDistrictForm'
// DistrictStreet
import AddDistrictStreetForm from '../../Forms/DistrictForm/DistrictStreet/AddDistrictStreetForm'
import EditDistrictStreetForm from '../../Forms/DistrictForm/DistrictStreet/EditDistrictStreetForm'
import RemoveDistrictStreetForm from '../../Forms/DistrictForm/DistrictStreet/RemoveDistrictStreetForm'

const DistrictsTable = () => {
  const [loading, setLoading] = useState(false)


  const [districts, setDistricts] = useState()
  const get_districts = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/districts/district_table/`
    const res = await axios.get(URL)
    setDistricts(res.data)
    setLoading(true)
  }

  const [districtStreets, setDistrictStreets] = useState()
  const get_districtStreets = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/districts/district_street_table/`
    const res = await axios.get(URL)
    setDistrictStreets(res.data)
    setLoading(true)
  }

  useEffect(() => {
    get_districts()
    get_districtStreets()
  }, [])


  if (!districts || districts.length === 0)
    return <p></p>

  if (!districtStreets || districtStreets.length === 0)
    return <p></p>

  return (
    <Fragment>
      {
        loading ?
          <div className='container mt-5'>

            <div>
              <h3>Участки</h3>
              <Box sx={{ display: 'flex', marginLeft: 45 }} >
                <div className="me-2"><AddDistrictForm /></div>
                <div className="me-2"><EditDistrictForm /></div>
                <div className="me-2"><RemoveDistrictForm /></div>
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
                      <th scope="col">Номер участка</th>
                      <th scope="col">Название участка</th>
                      <th scope="col">Улицы участка</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      districts.map((edition) =>
                        <tr key={edition.id}>
                          <th>{edition.id}</th>
                          <th>{edition.number}</th>
                          <th>{edition.title}</th>
                          <th>{edition.district_street}</th>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </Box>
              <br />
              <hr />
            </div>

            <div>
              <h3>Улицы в участке</h3>
              <Box sx={{ display: 'flex', marginLeft: 30 }} >
                <div className="me-2"><AddDistrictStreetForm /></div>
                <div className="me-2"><EditDistrictStreetForm /></div>
                <div className="me-2"><RemoveDistrictStreetForm /></div>
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
                      <th scope="col">Почтальон</th>
                      <th scope="col">Улица</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      districtStreets.map((edition) =>
                        <tr key={edition.id}>
                          <th>{edition.id}</th>
                          <th>{edition.postman}</th>
                          <th>{edition.street}</th>
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
              <br />
            </div>
          </div>
          :
          <Loading />
      }

    </Fragment>
  )
}

export default DistrictsTable