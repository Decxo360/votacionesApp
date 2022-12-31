import { useState } from "react";

export const useCreateVote =()=>{
    const [pregunta,setpregunta] = useState([{
        numero:1,
        pregunta:'',
      }])
      
      const onMasPregunta=()=>{
        setpregunta(
          [...pregunta,
          { numero: pregunta.length > 0 ? pregunta[pregunta.length-1].numero + 1 : 1,
            pregunta:'',
          }
          ])
      }

      const eliminarPregunta = index => {
        const nuevasPreguntas = [...pregunta];
        nuevasPreguntas.splice(index, 1);
        setpregunta(nuevasPreguntas);
      };

      //alternativa



      return{
        pregunta,
        onMasPregunta,
        eliminarPregunta,
     
      }
}