import React from 'react'
import './DriverCard.css'
import { Link, createSearchParams } from 'react-router-dom'

const DriverCard = ({
  driver_name,
  driver_img,
  country_code,
  team_name,
  team_color,
  driver_number,
  session_key,
}) => {
  const driver_name_lower = driver_name.split(' ').join('_').toLowerCase()
  return (
    <Link
      to={{
        pathname: `/driver/${driver_name_lower}`,
        search: `?${createSearchParams({
          driver_number,
          session_key,
        })}`,
      }}
      style={{ backgroundColor: `#${team_color}` }}
      className='driver--card__container'
    >
      <img src={driver_img} />
      <h4>{driver_name}</h4>
      <div className='driver--subtitle'>
        <p>{country_code}</p>
        <p>{team_name}</p>
      </div>
    </Link>
  )
}

export default DriverCard
