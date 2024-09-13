import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/f1_logo.svg'

const Header = () => {
  return (
    <header className='header--container'>
      <img className='header--logo' src={logo} alt='f1 logo' />
      <div className='header__container--links'>
        <nav className='header--nav__links'>
          <Link to={'/video'} className='header--nav__link'>
            Video
          </Link>
          <Link className='header--nav__link'>F1 Unlocked</Link>
          <Link className='header--nav__link'>Results</Link>
          <Link to={'/drivers'} className='header--nav__link'>
            Drivers
          </Link>
          <Link className='header--nav__link'>Teams</Link>
        </nav>

        <div className='header--nav__buttons'>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </header>
  )
}

export default Header
