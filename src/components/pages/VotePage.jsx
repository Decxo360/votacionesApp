import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useVotacion } from '../../hooks/useVotacion';
import { addNewVotation } from '../../store/vote/VoteSlice';
import { FormComponent } from './components/FormComponent'
import { IconBottom } from './components/IconBottom'


export const VotePage = () => {

  const {
    addAlternativa,
    addValueAlternativa,
    addpregunta,
    addValuepregunta,
    removeAlternativa,
    removePregunta,
    guardarVotacion,
    pregunta,
    titulo} = useVotacion()


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-[40px]'>{titulo}</h1>
      {pregunta.map(({numero,pregunta,alternativas},index)=>(
        <FormComponent add={addAlternativa} onChangePregunta={addValuepregunta} removeAlternativa={removeAlternativa} indexPre={index} alternativas={alternativas} agregarAlternativa={()=>addAlternativa} onDelete={()=>removePregunta(index)} onChangeAlternativa={addValueAlternativa} numero={numero} key={index} pregunta={pregunta}/>
      ))}
      <div className=' flex justify-center items-center gap-10'>
        {/* TODO GUARDAR VISTA PREVIA */}
        <IconBottom className={'border w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500 mt-5 hover:bg-blue-400'} width={'20'} icon={'https://cdn-icons-png.flaticon.com/512/376/376218.png'} method={guardarVotacion}/>
        <IconBottom className={'border w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500 mt-5 hover:bg-blue-400'} width={'20'} method={addpregunta}/> 
        <IconBottom className={'border w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500 mt-5 hover:bg-blue-400'} width={'20'} icon={'https://cdn-icons-png.flaticon.com/512/32/32282.png'}/>
      </div>
    </div>
  )
}
