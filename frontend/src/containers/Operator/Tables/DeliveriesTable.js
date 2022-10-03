import React, { useState, useEffect, Fragment } from 'react'
import Loading from '../../Loading/Loading'
import Box from '@mui/material/Box';
import axios from "axios";

// Delivery
import AddDeliveryForm from '../../Forms/DeliveryForm/AddDeliveryForm'
import EditDeliveryForm from '../../Forms/DeliveryForm/EditDeliveryForm'
import RemoveDeliveryForm from '../../Forms/DeliveryForm/RemoveDeliveryForm'

const DeliveriesTable = () => {
  const [loading, setLoading] = useState(false)


  const [deliveries, setDeliveries] = useState()
  const get_users = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/delivery/table/`
    const res = await axios.get(URL)
    setDeliveries(res.data)
    setLoading(true)
  }

  useEffect(() => {
    get_users()
  }, [])


  if (!deliveries || deliveries.length === 0)
    return <p></p>

  return (
    <Fragment>
      {
        loading ?
          <div className='container mt-5'>
            <h3>Доставки</h3>

            <Box sx={{ display: 'flex', marginLeft: 45 }} >
              <div className="me-2"><AddDeliveryForm /></div>
              <div className="me-2"><EditDeliveryForm /></div>
              <div className="me-2"><RemoveDeliveryForm /></div>
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
                    <th scope="col">Подписчик</th>
                    <th scope="col">Издание</th>
                    <th scope="col">Ожидается</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    deliveries.map((edition) =>
                      <tr key={edition.id}>
                        <th>{edition.id}</th>
                        <th>{edition.subscriber}</th>
                        <th>{edition.edition}</th>
                        <th>
                          <input
                            disabled
                            className="form-check-input ms-2"
                            type="checkbox"
                            checked={edition.expected}
                          />
                        </th>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </Box>
          </div>
          :
          <Loading />
      }

    </Fragment>
  )
}

export default DeliveriesTable