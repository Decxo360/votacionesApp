import React from 'react'
import { MiniPerfil } from './components/MiniPerfil'
import { Perfil } from './components/Perfil'
import { VotacionCard } from './components/VotacionCard'

export const ProfilePage = () => {
  return (
    <div className='flex flex-col'>
      <Perfil/>
      <div className='flex flex-row ml-10 justify-around mt-10'>
        <div className='flex flex-wrap gap-3 justify-center'>
          <VotacionCard/>
          <VotacionCard/>
          <VotacionCard/>
          <VotacionCard/>
          <VotacionCard/>
          <VotacionCard/>
          <VotacionCard/>
        </div>
        <div>
          <div className='flex flex-col w-[400px] border rounded-xl justify-center items-center '>
            <MiniPerfil/>
            <MiniPerfil/>
            <MiniPerfil/>
            <MiniPerfil/>
            <MiniPerfil/>
            <MiniPerfil/>
          </div>
        </div>
      </div>
    </div>
  )
}
