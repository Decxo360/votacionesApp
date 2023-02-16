import React from 'react'

export const Image = ({url='https://cdn-icons-png.flaticon.com/512/64/64572.png',name='logo',className='rounded-full',method}) => {
  return (
    <img className={className} src={url} alt={name} onClick={method} />
  )
}
