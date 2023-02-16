import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage,RegisterPage } from '../components/auth'
import { ErrorPage, HomePage, ProfilePage, SearchPage, VotePage } from '../components/pages'
import { VotarPage } from '../components/pages/Votar/VotarPage'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
        <Route path={'/Home'} element={<HomePage/>}/>
        <Route path={'/Search'} element={<SearchPage/>}/>
        <Route path={'/Perfil/:id'} element={<ProfilePage/>}/>
        <Route path={'/Votacion/:titulo'} element={<VotePage/>}/>
        <Route path={'/Votacion/votar/:titulo'} element={<VotarPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
