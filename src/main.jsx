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
import CreatePage from './components/CreatePage/CeratePage'

// STYLES

import './components/MainPage/MainPage.css'
import './components/RegisterPage/RegisterPage.css'
import './components/LoginPage/LoginPage.css'
import './components/StreamPage/StreamPage.css'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    /* <Router/> */
    /* <CreatePage/> */
   <div>
    <Router /> 
   </div>
   
)
