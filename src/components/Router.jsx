import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'
import MainPage from './MainPage/MainPage'
import CreatePage from './CreatePage/CreatePage'

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainPage/>} path='/' />
            <Route element={<LoginPage/>} path='/login' />
            <Route element={<RegisterPage/>} path='/register' />
            <Route element={<CreatePage/>} path='/create' />
        </Routes>
    </BrowserRouter>
    )
}

export default Router