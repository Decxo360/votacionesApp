import React, { useRef } from 'react'

export const Alternativa = ({numero,texto}) => {

    const input = useRef()

    const handleClick =()=>{
        input.current.click()
    }

  return (
    <div className='flex flex-row gap-2 hover:cursor-pointer' onClick={handleClick}>
        <input type={'checkbox'} className='w-[30px] rounded-full h-[30px] hover:cursor-pointer' ref={input}/>
        <h1>{numero})</h1>
        <p>{texto}</p>
    </div>
  )
}
