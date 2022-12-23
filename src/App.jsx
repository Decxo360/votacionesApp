import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppRoute } from './router/AppRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRoute/>
  )
}

export default App
