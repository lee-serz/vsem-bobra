import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="main-page-header">
        <img className='header-logo' src="../../../public/main-page-logo.png" alt="" />
        <nav className="main-page__menu">
            <Link to="/login" className="main-page__menu-btn">Войти</Link>
        </nav>
    </div>
  )
}

export default Header