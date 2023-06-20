import React from 'react'
import Image from 'next/image'

import './styles.css'

function ProfileBox() {
  return (
    <div>
      <Image 
        src='/images/Profile.jpg' 
        className='ProfileBoxImage'
        width={150} 
        height={150} 
        alt={''}
      />
    </div>
  )
}

export default ProfileBox