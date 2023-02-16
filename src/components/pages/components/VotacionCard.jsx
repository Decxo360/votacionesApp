import React from 'react'
import { useNavigate } from 'react-router-dom'

export const VotacionCard = ({titulo='Votacion Presidencial',creador='Sebastian Piñera'}) => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/Votacion/votar/${titulo}`,{replace:true})
  }

  return (
    <div className='flex flex-col border rounded-xl w-[200px] h-[100px] justify-center items-center sm:w-[50%] md:w-[35%] hover:cursor-pointer hover:bg-slate-200' onClick={handleClick}>
        <h1 className='text-black text-[20px]'>{titulo}</h1>
        <span className='text-slate-500'>By: {creador}</span>
    </div>
  )
}
