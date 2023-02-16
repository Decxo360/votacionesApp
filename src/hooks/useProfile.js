import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useProfile = ()=>{

    const [isVisible,setVisible] = useState(false)
    const [titulo,setTitulo] = useState('')
    const navigate = useNavigate()
  
    const handleOnChangeValue =(event)=>{
        event.preventDefault()
        const {value} = event.target
        setTitulo(value)
    }
  
    const onNavigate = () => {
      navigate(`/Votacion/${titulo}`, { replace: true })
    }
  
    const handleChange = () => {
      isVisible == false ? setVisible(true) : setVisible(false)
    }

    return{
        isVisible,
        titulo,
        handleChange,
        handleOnChangeValue,
        onNavigate
    }

}