import React from 'react'
import { Image } from './Image'

export const Perfil = ({votaciones, votados, seguidores}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <div className='flex justify-center '>
            <Image className='w-[150px]'/>
        </div>
        <div className='flex flex-row gap-10 mt-10'>
            <h1 className='text-[20px]'>Votaciones: 10</h1>
            <h1 className='text-[20px]'>Votaciones realizadas: 10</h1>
            <h1 className='text-[20px]'>Seguidores: 10</h1>
        </div>
    </div> 
  )
}
