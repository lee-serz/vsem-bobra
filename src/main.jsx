// LIBS
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'

// PAGES
import MainPage from './components/MainPage/MainPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import StreamModule from './components/StreamPage/StreamModule'
import MainStreamPage from './components/StreamPage/MainStreamPage'
import Chat from './components/ChatModule/Chat'
import CreatePage from './components/CreatePage/CreatePage'
import CreateForm from './components/CreateForm/CreateForm'

// STYLES

import './components/MainPage/MainPage.css'
import './components/RegisterPage/RegisterPage.css'
import './components/LoginPage/LoginPage.css'
import './components/StreamPage/StreamPage.css'
import './components/HeaderModule/Header.css'
import './components/CreateForm/CreateForm.css'
import './components/SidebarModule/Sidebar.css'
import './components/CreatePage/CreatePage.css'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
    /* <Router/> */
    
   <div>
        <Router /> 
   </div>
   
)
