import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/auth/login", {
                username,
                password,
            });

            // Обработка успешного ответа, например, сохранение токена и переход к следующей странице
        } catch (error) {
            // Обработка ошибок, например, отображение сообщения об ошибке
        }
    };


    // ВЕРСТКА
    return (
        <div className="login-page-wrapper">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-title">Авторизация</div>
                <div className="form-container">
                    <input className="form-container__input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={'Логин'} />
                    <input className="form-container__input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={'Пароль'} />
                    <button className="form-btn" type="submit">Войти</button>
                </div>
                <Link className="form-link" to="/register">Зарегистрироваться</Link>
            </form>
        </div>
    );
};

export default LoginPage;
