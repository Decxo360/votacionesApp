
import { useState } from 'react';
import { useAlternativa } from '../../../hooks/useAlternativa';
import { Image } from './Image'

export const AlternativaComponent = ({value,numero,onDelete,indexAlternativa,indexPregunta,onChangeAlternativa}) => {
    
    const handleChange = (event) =>{
        onChangeAlternativa(event,indexPregunta,indexAlternativa)
    }

    
    const handleRemove =()=>{
        onDelete(indexPregunta,indexAlternativa)
    }

    return (
        <div className='flex flex-row w-[100%]  items-center mt-5 gap-5'>
            <h1>{numero}</h1>
            <div className='flex flex-row items-center gap-5 w-[100%]'>
                <input type="text" placeholder='ingrese su alternativa' className='w-[100%]' onChange={handleChange} />
                <Image className='w-[15px] h-[15px] hover:cursor-pointer hover:scale-125 duration-150 delay-150' url={'https://cdn-icons-png.flaticon.com/512/1828/1828666.png'} method={handleRemove}/>
            </div>
        </div>

    )
}