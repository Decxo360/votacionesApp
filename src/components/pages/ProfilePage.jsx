import React, { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Btn } from './components/Btn'
import { MiniPerfil } from './components/MiniPerfil'
import { Modal } from './components/Modal'
import { Perfil } from './components/Perfil'
import { VotacionCard } from './components/VotacionCard'
import { IconBottom } from './components/IconBottom'
import { useProfile } from '../../hooks/useProfile'

export const ProfilePage = () => {

  const { isVisible,titulo,handleChange,handleOnChangeValue,onNavigate } = useProfile()

  return (
    <div className='flex flex-col justify-center items-center'>
      <Perfil />
      <div className='mt-10'>
        <Btn className={'rounded-xl w-[180px] text-white bg-blue-800 h-[60px] hover:bg-blue-600'} texto={'Crear nueva votacion'} method={handleChange} />
        {isVisible ?
          <Modal>
            <div className='bg-white w-[50%] h-auto pb-[30px] rounded-2xl flex flex-col'>
              <div className='flex justify-end'>
                <IconBottom icon='https://cdn-icons-png.flaticon.com/512/1828/1828666.png' width={15} className={'mr-[20px] mt-[20px] hover:scale-110 duration-100 delay-100'} method={handleChange} />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[30px]'>¿Quieres crear tu votacion?, Hazla Aqui</h1>
                <form className='flex flex-col mt-10 w-[100%] items-center justify-center gap-3'>
                  <label className=''>¿Como se llamara tu votacion?</label>
                  <input className='w-[60%] h-[40px] text-center rounded-2xl border' type="text" placeholder='Aqui va el nombre de la votacion que quieres crear' onChange={handleOnChangeValue} />
                </form>
              </div>
              <div className='flex flex-col-reverse items-center'>
                <Btn className={'rounded-xl w-[180px] mt-20 text-white bg-blue-800 h-[60px] hover:bg-blue-600'} texto={'Crear nueva votacion'} method={onNavigate} />
              </div>
            </div>
          </Modal>
          : null
        }
      </div>
      <div className='flex flex-row justify-around mt-10 gap-4'>
        <div className='flex flex-wrap gap-3 justify-center'>
          <VotacionCard />
          <VotacionCard />
          <VotacionCard />
          <VotacionCard />
          <VotacionCard />
          <VotacionCard />
          <VotacionCard />
        </div>
        <div className='flex flex-col w-[400px] border rounded-xl justify-center items-center '>
          <MiniPerfil />
          <MiniPerfil />
          <MiniPerfil />
          <MiniPerfil />
          <MiniPerfil />
        </div>
      </div>
    </div>
  )
}
