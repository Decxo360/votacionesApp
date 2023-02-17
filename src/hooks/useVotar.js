import { useRef, useState } from "react"

export const useVotar = ()=>{
    const div = useRef()
    const inputs = useRef([])
    const [selected, setSelected] = useState(null)
  
    const handleChangeInput = (index) => {
      setSelected(index)
      inputs.current.map((input, i) => {
        if (index !== i) {
          input.checked = false
        }
      })
    }
  
    const handleClickInput = (index) => {
      inputs.current[index].click()
    }

    return {
        inputs,
        div,
        handleChangeInput,
        handleClickInput
    }
    
}