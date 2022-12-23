import React from 'react'
import { ButtomForm } from './components/ButtomForm'

export const LoginPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center w-[100%]'>
            <div className=' flex flex-col justify-center items-center w-[50%] h-[auto] mt-[200px] border bg-white shadow-2xl shadow-blue-500/50 rounded-lg'>
                <form className='flex flex-col w-[80%]'>
                    <label className='ml-5 mb-[-10px] z-10 w-[48px] bg-white'>Correo</label>
                    <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text" />
                    <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white'>Contraseña</label>
                    <input className='border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="password"/>
                </form>
                <ButtomForm texto={'¿No has ingresado Nunca?'} url={'/register'} color={'bg-sky-800'} textBtn={'Login'}></ButtomForm>
            </div>

        </div>
    )
}
