import React from 'react'
import Image from 'next/image'

import './styles.css'

function ProfileBar() {
  return (
    <div>
      <Image 
        src='/images/Profile.jpg' 
        className='profileBarImage'
        width={150} 
        height={150} 
        alt={''}
      />
    </div>
  )
}

export default ProfileBar