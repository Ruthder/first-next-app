import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

function SidebarButton({
  text,
  href,
  icon,
  selected
}: {
  text: string,
  href: string,
  icon: string,
  selected: boolean
}) {
  return (
    <div className={(selected ?? 'selected ') + 'profileButtonContainer'}>
      <div className='shape'/>
      <Image src={icon} width={90} height={90} alt={''}></Image>
      <Link href={href}>{text}</Link>
    </div>
  )
}

export default SidebarButton