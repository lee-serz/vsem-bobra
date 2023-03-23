import React from 'react'
import CoursesHeader from './CoursesHeader'
import Header from '../HeaderModule/Header'
import Sidebar from '../SidebarModule/Sidebar'

const CoursesPage = () => {
  return (
    <div>
      <Header />
      <div className="create-page-container">
          <Sidebar/>
          <CoursesHeader/>
      </div>
    </div>
  )
}

export default CoursesPage