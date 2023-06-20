import Link from 'next/link'
import React from 'react'
import SidebarButton from './SidebarButton'

function Sidebar() {
  return (
    <nav className='sidebar'>
      <SidebarButton href='/' text='Dashboard' icon='/icons/sidebar/Home.svg' selected/>
      <SidebarButton href='/' text='Calendar' icon='/icons/sidebar/Calendar.svg' selected/>
      <SidebarButton href='/' text='Profile' icon='/icons/sidebar/Profile.svg' selected/>
    </nav>
  )
}

export default Sidebar