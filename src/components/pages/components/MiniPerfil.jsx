import React, { useState } from 'react'
import { Image } from './Image'

export const MiniPerfil = ({url,name}) => {

  const [seguir,setSeguir] = useState(false)

  const onChangeImage =()=>{
    seguir ? setSeguir(false) : setSeguir(true)
  }

  return (
    <div className='flex flex-row border rounded-lg w-[40%] h-[90px] gap-7 sm:h-[80px] sm:w-[300px] mt-[15px] mb-[15px] md:w-[300px]'>
        <div className='flex items-center'>
            <Image className='w-[50px] h-[50px] ml-5'/>
        </div>
        <div className='flex flex-row items-center w-auto'>
            <h1 className='text-[20px] hover:scale-110 delay-150 duration-150 hover:text-amber-600 hover:cursor-pointer mt-2 mb-2'>Diego Lundstedt Muñoz</h1>
            {
              seguir 
              ? <Image url='https://cdn-icons-png.flaticon.com/512/32/32282.png' name='mas' className='ml-[20px] w-[20px] h-[20px] rounded-full hover:scale-125 delay-150 duration-150 hover:cursor-pointer mr-5' method={onChangeImage}/>
              : <Image url='https://cdn-icons-png.flaticon.com/512/748/748113.png' name='mas' className='ml-[20px] w-[20px] h-[20px] rounded-full hover:scale-125 delay-150 duration-150 hover:cursor-pointer mr-5' method={onChangeImage}/>
            }
            
        </div>
    </div>
  )
}
