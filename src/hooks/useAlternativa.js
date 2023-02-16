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

    const onHandleChange = (event,index) =>{
        event.preventDefault();
        const{value}=event.target
        console.log(value);
        setAlternativas(prevState =>{
            const newState = [...prevState]
            newState[index].value = value
            return newState;
        })
    }

    return{
        alternativas,
        agregarAlternativa,
        eliminarAlternativa,
        onHandleChange,
        setAlternativas
    }

}