import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    id:'',
    name:'',
    apellido:'',
    username:'',
    email:'',
    token:''
}

export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login:(state,{payload})=>{
        state.id = payload.id
        state.name = payload.name
        state.apellido = payload.apellido
        state.username = payload.username
        state.email = payload.email
        state.token = payload.token
    },
    logOut:(state)=>{
        state.id = ''
        state.name = ''
        state.apellido=''
        state.username=''
        state.email=''
        state.token=''
    }
  },
});

export const {login,logOut} = AuthSlice.actions
