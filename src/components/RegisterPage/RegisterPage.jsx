import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/auth/login", {
                username,
                email,
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
                <div className="form-title">Регистрация</div>
                <div className="register-form-container">
                    <input className="register-form-container__input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={'Логин'} />
                    <input className="register-form-container__input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={'Почта'} />
                    <input className="register-form-container__input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={'Пароль'} />
                    <Link to="/" className="register-form-btn" type="submit">Sign Up</Link>
                </div>
                    <Link className="form-link" to="/login" >Войти </Link>

            </form>
        </div>
    );
};

export default RegisterPage;
