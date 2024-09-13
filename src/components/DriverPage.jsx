import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DriverCard from './DriverCard'
import DriverF1Component from './DriverF1Component'

const DriverPage = () => {
  const [searchParams] = useSearchParams()
  const [driver, setDriver] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchF1Driver = async () => {
      try {
        const getf1bySessionKey = await fetch(
          `https://api.openf1.org/v1/drivers?driver_number=${searchParams.get(
            'driver_number'
          )}&session_key=${searchParams.get('session_key')}`,
          {
            method: 'GET',
          }
        )
        const f1Driver = await getf1bySessionKey.json()
        setDriver(f1Driver[0])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchF1Driver()
  }, [])

  console.log(driver)

  if (loading)
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading...
      </div>
    )

  return (
    <div>
      <DriverF1Component
        broadcast_name={driver.broadcast_name}
        country_code={driver.country_code}
        driver_number={driver.driver_number}
        full_name={driver.full_name}
        img_url={driver.headshot_url}
        team_color={driver.team_colour}
        team_name={driver.team_name}
      />
    </div>
  )
}

export default DriverPage
