import React from 'react'
import { Link } from 'react-router-dom'

export const ButtomForm = ({texto, metodo, color, url,textBtn}) => {
  return (
    <div>
        <h1 className='mb-[20px] mt-[20px]'>{texto}<Link className='hover:text-orange-800 scale-110 duration-100 transition delay-150' to={url} > ¡acá te ayudamos! </Link></h1>
        <button className={`ml-3 rounded-3xl w-[95%] h-[50px] hover:bg-blue-700 text-white focus:bg-blue-700 mb-[20px] ${color}` }>{textBtn}</button>
    </div>
  )
}
