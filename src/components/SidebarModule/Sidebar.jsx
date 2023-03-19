import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link className="sidebar-link" to="create">Создать курс</Link>
        <Link className="sidebar-link" to="courses">Мои курсы</Link>
    </div>
  )
}

export default Sidebar