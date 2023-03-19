import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'
import MainPage from './MainPage/MainPage'
import CreatePage from './CreatePage/CreatePage'
import CoursesPage from './Courses/CoursesPage'

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainPage/>} path='/' />
            <Route element={<LoginPage/>} path='/login' />
            <Route element={<RegisterPage/>} path='/register' />
            <Route element={<CreatePage/>} path='/api' />
            <Route element={<CoursesPage/>} path='/api/courses' />
        </Routes>
    </BrowserRouter>
    )
}

export default Router