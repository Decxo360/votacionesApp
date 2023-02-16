import React from 'react'
import { useParams } from 'react-router-dom'
import { PreguntaForm } from './Components/PreguntaForm'

export const VotarPage = () => {

  const {titulo} = useParams()

  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
        <h1 className='text-[45px]'>{titulo}</h1>
        <div className='flex flex-col justify-center items-center w-[100%]'>
          <PreguntaForm numero={1} pregunta={'Que tu hace'}/>
          <PreguntaForm numero={1} pregunta={'Que tu hace'}/>
        </div>
    </div>
  )
}
