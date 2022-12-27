import React from 'react'

export const Btn = ({className, texto, method}) => {
  return (
    <button className={`text-white w-[100px] h-[40px] rounded-xl ${className}`} onClick={method}>{texto}</button>
  )
}
