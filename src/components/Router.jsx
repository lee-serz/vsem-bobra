import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'
import MainPage from './MainPage/MainPage'

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainPage/>} path='/' />
            <Route element={<LoginPage/>} path='/login' />
            <Route element={<RegisterPage/>} path='/register' />
        </Routes>
    </BrowserRouter>
    )
}

export default Router