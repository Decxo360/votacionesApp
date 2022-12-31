import { useState } from "react";

export const useAlternativa = ()=>{

    const [alternativas,setAlternativas] =useState([
        {numero:1, value:''},
        {numero:2, value:''},
    ])

    const agregarAlternativa =()=>{
        setAlternativas([
            ...alternativas,
            {numero:alternativas.length > 0 ? alternativas[alternativas.length-1].numero+1 : 1, value:''}
        ])
    }
    const eliminarAlternativa = index => {
        const nuevasAlternativas = [...alternativas];
        nuevasAlternativas.splice(index, 1);
        setAlternativas(nuevasAlternativas);
    };

    return{
        alternativas,
        agregarAlternativa,
        eliminarAlternativa
    }

}