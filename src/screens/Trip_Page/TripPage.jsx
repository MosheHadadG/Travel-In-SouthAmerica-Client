import React, { useContext, useEffect, useState } from 'react'
import { getPlanningById } from '../../APIs/ServerAPI/planning.server'
import { appContext } from '../../context/appContext'
import Spinner from '../../components/Spinner/Spinner'
import Box from '../../components/Box/Box'

import './TripPage.css'
import BoardTrip from './Board_Trip/BoardTrip'

function TripPage(props) {
  const { token } = useContext(appContext)
  const [planning, setPlanning] = useState({});

  useEffect(() => {
    const fetchPlannnig = async () => {
      const planning = await getPlanningById(token, props.match.params.id)
      if (planning.response && planning.response.status === 404) return props.history.push('/404');
      setPlanning(planning);

    }
    fetchPlannnig();

  }, [])

  function withoutTime(dateTime) {
    const date = new Date(dateTime);
    const dateWithoutTime = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    return dateWithoutTime;
  }

  return (
    <div className='trip-page-main'>
      {Object.keys(planning).length === 0 ? <Spinner /> :
        <>
          <div className="trip-page-board">
          <h1>Details of {planning.ownerName} trip</h1>
            <BoardTrip countriesPlan={planning.planning?.countriesPlan} />
          </div>
          <div className='trip-page-boxes-info'>
              <Box
                srcIcon={<i className="fa-solid fa-plane fa-2xl"></i>}
                title="Departure Date"
                desc={withoutTime(planning.planning.departureDate)}
              />
              <Box
                srcIcon={<i className="fa-solid fa-house-chimney fa-2xl"></i>}
                title="Return Date"
                desc={withoutTime(planning.planning.returnDate)}
              />
              <Box
                srcIcon={<i className="fa-solid fa-dollar-sign fa-2xl"></i>}
                title="Budget"
                desc={`${planning.planning.budget}$`}
              />
          </div>

        </>

      }
    </div>
  )
}

export default TripPage