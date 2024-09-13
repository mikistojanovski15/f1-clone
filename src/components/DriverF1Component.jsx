import React from 'react'

const DriverF1Component = ({ driver_name, img_url, country_code, team_name, team_color }) => {
  return (
    <div style={{ backgroundColor: `#${team_color}` }} className='driver--card__container'>
      <img src={img_url} />
      <h4>{driver_name}</h4>
      <div className='driver--subtitle'>
        <p>{country_code}</p>
        <p>{team_name}</p>
      </div>
    </div>
  )
}

export default DriverF1Component
