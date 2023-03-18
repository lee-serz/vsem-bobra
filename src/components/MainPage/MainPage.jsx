import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="main-page-wrapper">
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
            <div className="main-page-content">
                <div className="main-page-content__text">Создавайте свой онлайн-курс <br /> на конструкторе Всем Бобра </div>
                <div className="main-page-content__btn">Создать курс</div>
            </div>
        </div>
    );
};

export default MainPage;