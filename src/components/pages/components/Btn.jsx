import React from 'react'

export const Btn = ({className, texto, method}) => {
  return (
    <button className={`rounded-xl ${className}`} onClick={method}>{texto}</button>
  )
}
