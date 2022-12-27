import React from 'react'
import { NavBar } from '../NavBar'
import { MiniPerfil } from './components/MiniPerfil'
import { Perfil } from './components/Perfil'
import { VotacionCard } from './components/VotacionCard'

export const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <MiniPerfil/>
      <VotacionCard/>
      <Perfil/>
    </div>
  )
}
