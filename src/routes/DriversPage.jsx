import React, { useEffect, useState } from 'react'
import './DriversPage.css'
import DriverCard from '../components/DriverCard'

const DriversPage = () => {
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(true)

  // prv cekor za fetch ni e useEffect
  // koga ke stigneme na web stranata da napravi povik samo ednash toa e so dependensy array []

  useEffect(() => {
    const fetchF1Drivers = async () => {
      try {
        const f1Drivers = await fetch('https://api.openf1.org/v1/drivers', {
          method: 'GET',
          //   method: 'PUT',
          //   body: { }
        })
        const f1DriversData = await f1Drivers.json()
        const newF1Data = f1DriversData?.slice(0, 20)
        // prviot cekor do tuka fetchame f1 drivers

        setDrivers(newF1Data) // ova e vtoriot cekor, tuka gi zacuvuvame za da mozi da gi mapirame
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchF1Drivers()
  }, [])

  if (loading)
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading...
      </div>
    )

  console.log(drivers)
  return (
    <div className='drivers--page__container'>
      <div className='drivers--page__img--banner' />
      <div className='drivers--page__f1--drivers'>
        {drivers.map((driver, i) => (
          <DriverCard
            key={i}
            driver_name={driver.full_name}
            driver_img={driver.headshot_url}
            country_code={driver.country_code}
            team_name={driver.team_name}
            team_color={driver.team_colour}
            session_key={driver.session_key}
            driver_number={driver.driver_number}
          />
        ))}
      </div>
    </div>
  )
}

export default DriversPage
