import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage,RegisterPage } from '../components/auth'
import { ErrorPage, HomePage, ProfilePage, SearchPage } from '../components/pages'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
        <Route path={'/Home'} element={<HomePage/>}/>
        <Route path={'/Search'} element={<SearchPage/>}/>
        <Route path={'/Perfil/:id'} element={<ProfilePage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
