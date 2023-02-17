import React, { useRef, useState } from 'react'
import { useVotar } from '../../../../hooks/useVotar'
import { Alternativa } from './Alternativa'

let alternativas = [
  { numero: 1, texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur vero autem eius qui labore, unde rerum doloribus deserunt laboriosam amet sit perspiciatis ab voluptas aliquam placeat provident! Obcaecati, architecto.' },
  { numero: 2, texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur vero autem eius qui labore, unde rerum doloribus deserunt laboriosam amet sit perspiciatis ab voluptas aliquam placeat provident! Obcaecati, architecto.' },
  { numero: 3, texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur vero autem eius qui labore, unde rerum doloribus deserunt laboriosam amet sit perspiciatis ab voluptas aliquam placeat provident! Obcaecati, architecto.' },
]

export const PreguntaForm = ({ pregunta, numero }) => {
  const {inputs,div,handleChangeInput,handleClickInput} = useVotar()
  return (
    <div className='w-[60%] border mt-5 rounded-xl pb-[20px]'>
      <h1 className='text-[25px] ml-5'>{numero}) {pregunta}</h1>
      <div className='ml-5 mt-5 flex flex-col gap-5' ref={div}>
        {
          alternativas.map(({ texto, numero }, index) => (
            <Alternativa index={index} handleClick={handleClickInput} handleChangeInput={handleChangeInput} texto={texto} numero={numero} key={index} referencia={(el) => (inputs.current[index] = el)} />
          ))
        }
      </div>
    </div>
  )
}


