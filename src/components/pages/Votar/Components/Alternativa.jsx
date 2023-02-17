import React, { useRef } from 'react'

export const Alternativa = ({index,handleClick,numero,texto,referencia,handleChangeInput }) => {

    const handleOnclick=()=>{
      handleClick(index)
    }

    const handleOnChange=()=>{
      handleChangeInput(index)
    }

  return (
    <div className='flex flex-row gap-2 hover:cursor-pointer' onClick={handleOnclick}>
        <input type={'checkbox'} className='w-[30px] rounded-full h-[30px] hover:cursor-pointer' ref={referencia} onChange={handleOnChange}/>
        <h1>{numero})</h1>
        <p>{texto}</p>
    </div>
  )
}
