import React, { useEffect, useState } from 'react'
import { AlternativaComponent } from './alternativaComponent'
import { IconBottom } from './IconBottom'
import { Image } from './Image'

export const FormComponent = ({
    alternativas,
    numero,
    onDelete,
    indexPre,
    add,
    pregunta,
    removeAlternativa,
    onChangePregunta,
    onChangeAlternativa
}) => {
    const onChangeValue =(event)=>{
        onChangePregunta(event,indexPre)
    }

    const borrarPregunta=()=>{
        onDelete(indexPre)
    }

    const handleClick =()=>{
        add(indexPre)
    }
      
  return (
    <div className='w-[60%] border mt-5 rounded-xl pb-[20px]'>
        <div className='flex flex-row'>
        <form className='mt-5 ml-5 flex flex-row items-center gap-5 w-[50%]'>
            <h1>{numero})</h1>
            <input type="text" placeholder='Ingrese su pregunta' className='w-[100%]' onChange={onChangeValue}/>
        </form>
        <div className='flex justify-end mt-5 mr-5 w-[50%]'>
            <Image className='w-[15px] h-[15px] hover:cursor-pointer hover:scale-125 duration-150 delay-150' url={'https://cdn-icons-png.flaticon.com/512/1828/1828666.png'} method={borrarPregunta}/>            
        </div>
        </div>
        <form className='flex flex-col mt-5 ml-10 w-[90%]'>
            {alternativas.map(({numero,value},index)=>(
                <AlternativaComponent key={index} numero={numero} onDelete={removeAlternativa} removeAlternativa={removeAlternativa} indexPregunta={indexPre} indexAlternativa={index} onChangeAlternativa={onChangeAlternativa}/>
            ))}
        </form>
        <div className=' flex justify-center items-center'>
                <IconBottom className={'border w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500 mt-5 hover:bg-blue-400'} width={'20'} method={handleClick}/>      
        </div>
    </div>
  )
}
