import React, { useRef } from 'react'
import { Alternativa } from './Alternativa'

export const PreguntaForm = ({pregunta,numero}) => {

    const div = useRef()
    const handleClick = ()=>{
        console.log(div.current.children[0]);
    }

  return (
    <div className='w-[60%] border mt-5 rounded-xl pb-[20px]'>
        <h1 className='text-[25px] ml-5'>{numero}) {pregunta}</h1>
        <div className='ml-5 mt-5 flex flex-col gap-5' ref={div} onClick={handleClick}>
            <Alternativa texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. In autem eligendi saepe doloremque ex sit explicabo, cumque rerum impedit reprehenderit obcaecati odio recusandae ea soluta, temporibus voluptatum quae nisi debitis.'} numero={1}/>
            <Alternativa texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. In autem eligendi saepe doloremque ex sit explicabo, cumque rerum impedit reprehenderit obcaecati odio recusandae ea soluta, temporibus voluptatum quae nisi debitis.'} numero={2}/>
            <Alternativa texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. In autem eligendi saepe doloremque ex sit explicabo, cumque rerum impedit reprehenderit obcaecati odio recusandae ea soluta, temporibus voluptatum quae nisi debitis.'} numero={3}/>
        </div>
    </div>
  )
}


