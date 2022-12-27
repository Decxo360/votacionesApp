import React from 'react'

export const VotacionCard = ({titulo='Votacion Presidencial',creador='Sebastian Piñera'}) => {
  return (
    <div className='flex flex-col border rounded-xl w-[200px] h-[100px] justify-center items-center sm:w-[10%] md:w-[25%] hover:cursor-pointer hover:bg-slate-200'>
        <h1 className='text-black text-[20px]'>{titulo}</h1>
        <span className='text-slate-500'>By: {creador}</span>
    </div>
  )
}
