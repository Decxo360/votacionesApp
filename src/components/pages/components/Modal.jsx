import React, { Children } from 'react'

export const Modal = ({children, className,isActive}) => {
  return (
    <div className={`w-[100%] h-[100%] fixed top-0 left-0 z-[1] bg-[rgba(0,0,0,0.5)] ${className} ${isActive}`}>
       <div className='flex flex-col justify-center items-center w-[100%] h-[100%]'>
        {children}
       </div>
    </div>
  )
}
