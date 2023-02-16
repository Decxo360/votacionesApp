import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

export const useVotacion = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const votacion = useSelector((state)=>state.votaciones.newVotacion)
    const {titulo} = useParams()
    const alternativa={
        numero:1,
        texto:''
      }
      const initialState = {
        numero:1,
        pregunta:'',
        alternativas:[alternativa]
      }
    
      const [pregunta,setPregunta]=useState( votacion == null ? [initialState] : votacion)
    
      const addpregunta = () =>{
        initialState.numero = pregunta.length + 1
        setPregunta([...pregunta, initialState])
      }
    
      const addAlternativa =(index)=>{
        setPregunta(prevState =>{
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

      const guardarVotacion = () => {
        localStorage.setItem("votacion",pregunta)
        dispatch(addNewVotation({pregunta}))
        navigate("/Perfil/1",{replace:true})
      }

      return {
        addpregunta,
        addAlternativa,
        addValueAlternativa,
        addValuepregunta,
        removeAlternativa,
        removePregunta,
        guardarVotacion,
        pregunta,
        titulo
      }
}