import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateVote } from '../../hooks/usePregunta'
import { addNewVotation } from '../../store/vote/VoteSlice';
import { FormComponent } from './components/FormComponent'
import { IconBottom } from './components/IconBottom'




export const VotePage = () => {
  const alternativa={
    numero:1,
    texto:''
  }
  const initialState = {
    numero:1,
    pregunta:'',
    alternativas:[alternativa]
  }

  const [pregunta,setPregunta]=useState([initialState])


  const addpregunta = () =>{
    initialState.numero = pregunta.length + 1
    setPregunta([...pregunta, initialState])
  }

  const addAlternativa =(index)=>{
    setPregunta(prevState =>{
      console.log(prevState);
      const newState = [...prevState]
      newState[index].alternativas = [...newState[index].alternativas, {numero:newState[index].alternativas.length+1,texto:''}]
      return newState
    })
  }

  const removePregunta = (index) =>{
     const newpregunta = [...pregunta]
     newpregunta.splice(index,1)
     setPregunta(newpregunta)
  }

  const removeAlternativa = (indexPregunta,indexAlternativa) =>{
    setPregunta(prevState=>{
      const newState = [...prevState]
      newState[indexPregunta].alternativas.splice(indexAlternativa,1)
      return newState
    })
  }

  const addValuepregunta=(event, index)=>{
    event.preventDefault()
    const {value} = event.target
    setPregunta(prevState=>{
      const newState = [...prevState]
      newState[index].pregunta = value
      return newState
    })
  }
  const addValueAlternativa=(event, indexPre,indexAlternativa)=>{
    event.preventDefault()
    const {value} = event.target
    setPregunta(prevState=>{
      const newState = [...prevState]
      newState[indexPre].alternativas[indexAlternativa].texto = value
      return newState
    })
  }

  const dispatch = useDispatch()

  const GuardarVotacion = () => {
    dispatch(addNewVotation({pregunta}))
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {pregunta.map(({numero,pregunta,alternativas},index)=>(
        <FormComponent add={addAlternativa} onChangePregunta={addValuepregunta} removeAlternativa={removeAlternativa} indexPre={index} alternativas={alternativas} agregarAlternativa={()=>addAlternativa} onDelete={()=>removePregunta(index)} onChangeAlternativa={addValueAlternativa} numero={numero} key={index} pregunta={pregunta}/>
      ))}
      <div className=' flex justify-center items-center gap-10'>
        {/* TODO GUARDAR VISTA PREVIA */}
        <IconBottom className={'border w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500 mt-5 hover:bg-blue-400'} width={'20'} icon={'https://cdn-icons-png.flaticon.com/512/376/376218.png'} method={GuardarVotacion}/>
        <IconBottom className={'border w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500 mt-5 hover:bg-blue-400'} width={'20'} method={addpregunta}/> 
        <IconBottom className={'border w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-500 mt-5 hover:bg-blue-400'} width={'20'} icon={'https://cdn-icons-png.flaticon.com/512/32/32282.png'}/>
      </div>
    </div>
  )
}
