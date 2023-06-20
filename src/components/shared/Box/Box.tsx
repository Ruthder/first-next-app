import React from 'react'

import './styles.css'

function Box({
  children,
  rows,
  columns
}: {
  children: React.ReactNode,
  rows: [number, number],
  columns: [number, number]
}) {

  const style: React.CSSProperties = {
    gridRow: `${rows[0]}/${rows[1]}`,
    gridColumn: `${columns[0]}/${columns[1]}`
  }

  return (
    <div style={style} className='box'>
      {children}
    </div>
  )
}

export default Box