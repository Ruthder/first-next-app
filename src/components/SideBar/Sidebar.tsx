import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <nav>
      <Link href='/'>Dashboard</Link>
      <Link href='/calendar'>Calendar</Link>
      <Link href='/profile'>Profile</Link>
    </nav>
  )
}

export default Sidebar