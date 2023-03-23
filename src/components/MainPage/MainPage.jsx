import React from "react";
import Header from "../HeaderModule/Header";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className="main-page-wrapper">
                <div className="main-page-content">
                    <div className="main-page-content__text">Создавайте свой онлайн-курс <br /> на конструкторе Всем Бобра </div>
                    <Link className="main-page-content__btn" to="/api">Создать курс</Link>
                </div>
            </div>
        </div>
    );
};

export default MainPage;