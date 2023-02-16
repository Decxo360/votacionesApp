import { useState } from "react";

export const useCreateVote =()=>{
    const [texto,setTexto]=useState("")

    const [pregunta,setpregunta] = useState([{
        numero:1,
        texto,
      }])
      
      const onMasPregunta=()=>{
        setpregunta(
          [...pregunta,
          { numero: pregunta.length > 0 ? pregunta[pregunta.length-1].numero + 1 : 1,
            texto,
          }
          ])
      }

      const eliminarPregunta = index => {
        const nuevasPreguntas = [...pregunta];
        nuevasPreguntas.splice(index, 1);
        setpregunta(nuevasPreguntas);
      };

      const handleChange = (event)=>{
        event.preventDefault();
        setTexto(event.target.value)
      }

      return{
        pregunta,
        onMasPregunta,
        eliminarPregunta,
        handleChange
      }
}