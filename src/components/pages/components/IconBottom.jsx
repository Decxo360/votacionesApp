import React from 'react'

export const IconBottom = ({method,icon='https://cdn-icons-png.flaticon.com/512/748/748113.png', className, width}) => {
  return (
    <button onClick={method} className={className}>
        <img width={width} src={icon} alt="mas" />
    </button>
  )
}
