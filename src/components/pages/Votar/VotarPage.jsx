import React from 'react'
import { useParams } from 'react-router-dom'
import { Btn } from '../components/Btn'
import { PreguntaForm } from './Components/PreguntaForm'

export const VotarPage = () => {

  const {titulo} = useParams()

  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
        <h1 className='text-[45px]'>{titulo}</h1>
        <div className='flex flex-col justify-center items-center w-[100%]'>
          <PreguntaForm numero={1} pregunta={'Que tu hace'}/>
          <PreguntaForm numero={1} pregunta={'Que tu hace'}/>
          <PreguntaForm numero={1} pregunta={'Que tu hace'}/>
        </div>
        <Btn texto='Enviar los votos' className={'w-auto bg-blue-700 text-white h-[45px] pr-5 pl-5 mt-10 mb-10 hover:cursor-pointer hover:bg-blue-600'}/>
    </div>
  )
}
