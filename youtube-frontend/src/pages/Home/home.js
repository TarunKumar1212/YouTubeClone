import React from 'react'
import SideNavBar from '../../components/SideNavbar/SideNavBar'
import HomePage from '../../components/HomePage/HomePage'
import './home.css'

const home = ({sideNavbar}) => {
  return (
    <div className='home'> 
      <SideNavBar sideNavbar = {sideNavbar} />
      <HomePage sideNavbar={sideNavbar}/>
    </div>
  )
}

export default home
