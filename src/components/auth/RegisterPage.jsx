import React from 'react'
import { ButtomForm } from './components/ButtomForm'

export const RegisterPage = () => {
  return (
    <div className='flex flex-col w-[100%] justify-center items-center mt-[100px]'>
      <div className='flex flex-col w-[50%] justify-center items-center border bg-white shadow-2xl shadow-blue-500/50 rounded-lg'>
        <form className='flex flex-col w-[80%]'>
          <label className='ml-5 mb-[-10px] z-10 w-[65px] bg-white'>Nombre</label>
          <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" name="" id="" />
          <label className='ml-5 mb-[-10px] z-10 w-[70px] bg-white'>Apellidos</label>
          <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" name="" id="" />
          <label className='ml-5 mb-[-10px] z-10 w-[75px] bg-white'>Username</label>
          <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" name="" id="" />
          <label className='ml-5 mb-[-10px] z-10 w-[52px] bg-white'>Correo</label>
          <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="email" name="" id="" />
          <label className='ml-5 mb-[-10px] z-10 w-[86px] bg-white'>Contraseña</label>
          <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="password" name="" id="" />
          <label className='ml-5 mb-[-10px] z-10 w-[95px] bg-white'>Contraseña 2</label>
          <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="password" name="" id="" />
        </form>
        <ButtomForm texto={'¿Ya tienes una cuenta?'} url={'/login'} color={'bg-indigo-800'} textBtn={'Registrarse'}></ButtomForm>
      </div>
    </div>
  )
}
