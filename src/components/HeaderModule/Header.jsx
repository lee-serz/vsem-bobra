import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="main-page-header">
        <img src="../../../public/main-page-logo.png" alt="" />
        <nav className="main-page__menu">
            <ul className="main-page__menu-list">
                <li className="menu-list__item"><a className="menu-list__link" href="/">О нас</a></li>
                <li className="menu-list__item"><a className="menu-list__link" href="/about">Виды курсов</a></li>
                <li className="menu-list__item"><a className="menu-list__link" href="/contact">Стоимость</a></li>
                <li className="menu-list__item"><a className="menu-list__link" href="/contact">Частые <span>Б</span>опросы</a></li>
            </ul>
            <Link to="/login" className="main-page__menu-btn">Войти</Link>
        </nav>
    </div>
  )
}

export default Header