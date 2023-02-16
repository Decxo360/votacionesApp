import React, { useState } from 'react'
import { ButtomForm } from './components/ButtomForm'

export const LoginPage = () => {

    const [form, setform] = useState({
        correo:'',
        contrasena:''
    })

    const onChangeCorreo =(event)=>{
        event.preventDefault()
        setform({...form, correo: event.target.value})
    }
    const onChangeContrasena =(event)=>{
        event.preventDefault()
        setform({...form, contrasena: event.target.value})
    }

    console.log(form);

    return (
        <div className=' flex flex-col justify-center items-center w-[100%]'>
            <div className=' flex flex-col justify-center items-center w-[50%] h-[auto] mt-[200px] border bg-white shadow-2xl shadow-blue-500/50 rounded-lg'>
                <form className='flex flex-col w-[80%]'>
                    <label className='ml-5 mb-[-10px] z-10 w-[48px] bg-white'>Correo</label>
                    <input className='pl-5 border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="text"  onChange={onChangeCorreo}/>
                    <label className='ml-5 mb-[-10px] z-10 w-[80px] bg-white'>Contraseña</label>
                    <input className='pl-5 border h-[50px] border-sky-800 focus:outline-sky-800 placeholder:italic' type="password" onChange={onChangeContrasena}/>
                </form>
                <ButtomForm texto={'¿No has ingresado Nunca?'} url={'/register'} color={'bg-sky-800'} textBtn={'Login'}></ButtomForm>
            </div>

        </div>
    )
}
