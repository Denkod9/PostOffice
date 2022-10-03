import React, { useState, useEffect, Fragment } from 'react'
import Loading from '../../Loading/Loading'
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import axios from "axios";

// EditionType
import AddEditionTypeForm from '../../Forms/EditionForm/EditionType/AddEditionTypeForm'
import EditEditionTypeForm from '../../Forms/EditionForm/EditionType/EditEditionTypeForm'
import RemoveEditionTypeForm from '../../Forms/EditionForm/EditionType/RemoveEditionTypeForm'
// Subscription
import AddSubscriptionForm from '../../Forms/EditionForm/Subscription/AddSubscriptionForm'
import EditSubscriptionForm from '../../Forms/EditionForm/Subscription/EditSubscriptionForm'
import RemoveSubscriptionForm from '../../Forms/EditionForm/Subscription/RemoveSubscriptionForm'

const EditionsTable = () => {
  const [loading, setLoading] = useState(false)


  const [editionTypes, setEditionTypes] = useState()
  const get_edition_types = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/edition_types/`
    const res = await axios.get(URL)
    setEditionTypes(res.data)
    setLoading(true)
  }

  const [editions, setEditions] = useState()
  const get_editions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/`
    const res = await axios.get(URL)
    setEditions(res.data)
    setLoading(true)
  }

  const [subscriptions, setSubscriptions] = useState()
  const get_subscriptions = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/editions/subscription_table/`
    const res = await axios.get(URL)
    setSubscriptions(res.data)
    setLoading(true)
  }

  useEffect(() => {
    get_edition_types()
    get_editions()
    get_subscriptions()
  }, [])


  if (!editionTypes || editionTypes.length === 0)
    return <p></p>

  if (!editions || editions.length === 0)
    return <p></p>

  if (!subscriptions || subscriptions.length === 0)
    return <p></p>

  return (
    <Fragment>
      {
        loading ? 
<div className='container mt-5'>
        <div>
          <h3>Типы изданий</h3>
        <Box sx={{ display: 'flex' , marginLeft: 35}} >
            <div className="me-2"><AddEditionTypeForm /></div>
            <div className="me-2"><EditEditionTypeForm/></div>
            <div className="me-2"><RemoveEditionTypeForm /></div>
            <div className="me-2"></div>
          </Box>
          <Box
            sx={{
              marginTop: 5,
              height: 300,
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
                  <th scope="col">Тип издания</th>
                </tr>
              </thead>
              <tbody>
                {
                  editionTypes.sort((a, b) => (a.id < b.id ? -1 : 1)).map((edition) =>
                    <tr key={edition.id}>
                      <th>{edition.id}</th>
                      <th>{edition.type_name}</th>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </Box>
          <br />
          <hr />
        </div>
        <div className='mt-5'>
          <h3>Издания</h3>
          <Box
            sx={{
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
                  <th scope="col">Обложка</th>
                  <th scope="col">Индекс</th>
                  <th scope="col">Название</th>
                  <th scope="col">Цена</th>
                  <th scope="col">Тип издания</th>
                  <th scope="col">Описание</th>
                </tr>
              </thead>
              <tbody>
                {
                  editions.map((edition) =>
                    <tr key={edition.id}>
                      <th>{edition.id}</th>

                      <th>
                        <ImageListItem
                          sx={{
                            boxShadow: 24,
                          }}
                        >
                          <img
                            src={edition.image}
                            alt={edition.title}
                          />
                        </ImageListItem>

                      </th>
                      <th>{edition.index}</th>
                      <th>{edition.title}</th>
                      <th>{edition.price}</th>
                      <th>{edition.edition_type}</th>
                      <th>{edition.description}</th>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </Box>
          <br />
          <hr />
        </div>
        <div className='mt-5'>
          <h3>Подписки</h3>
        <Box sx={{ display: 'flex' , marginLeft: 53}} >
            <div className="me-2"><AddSubscriptionForm /></div>
            {/* <div className="me-2"><EditSubscriptionForm/></div> */}
            <div className="me-2"><RemoveSubscriptionForm /></div>
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
                  <th scope="col">Дата начала подписки</th>
                  <th scope="col">Продолжительность (мм)</th>
                  <th scope="col">Подписка</th>
                </tr>
              </thead>
              <tbody>
                {
                  subscriptions.sort((a, b) => (a.id < b.id ? -1 : 1)).map((edition) =>
                    <tr key={edition.id}>
                      <th>{edition.id}</th>
                      <th>{edition.subscriber}</th>
                      <th>{edition.edition}</th>
                      <th>{edition.date_of_subscription}</th>
                      <th>{edition.duration}</th>
                      <th>
                        <input
                          disabled
                          className="form-check-input ms-2"
                          type="checkbox"
                          checked={edition.is_subscription}
                        />
                      </th>
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

export default EditionsTable