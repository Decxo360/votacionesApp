import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logOut } from '../store/auth/AuthSlice'
import { Btn } from './pages/components/Btn'

export const NavBar = () => {

  const {isLogged,id} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

   const onLogOut =()=>{
    dispatch(logOut)
   }
   
   const onLogIn=()=>{
    navigate('/login',{replace:true})
   }

  return (
    <div className='w-[100%]'>
      <div className=' flex flex-row justify-center items-center w-[100%] gap-10 mt-5'>
          <NavLink className={({isActive})=>  isActive ? 'text-amber-500 scale-110' : 'text-black hover:text-amber-500 hover:scale-110 transition ease-in-out delay-150' }  to={''} >Home</NavLink>
          <NavLink className={({isActive})=>  isActive ? 'text-amber-500 scale-110' : 'text-black hover:text-amber-500 hover:scale-110 transition ease-in-out delay-150' }  to={'/search'} >Buscar Votación</NavLink>
          <NavLink className={({isActive})=>  isActive ? 'text-amber-500 scale-110' : 'text-black hover:text-amber-500 hover:scale-110 transition ease-in-out delay-150' }  to={isLogged ? `/Perfil/${id}` : '/login'} >Mi Perfil</NavLink>
          {
            isLogged 
            ? <Btn className={'bg-red-500 hover:bg-red-600 hover:scale-110 transition ease-in-out delay-150'} texto={'LogOut'} method={onLogOut}/>
            : <Btn className={'bg-blue-700 hover:bg-blue-800 hover:scale-110 transition ease-in-out delay-150'}  texto={'LogIn'} method={onLogIn} />
          }
      </div>
    </div>
  )
}
