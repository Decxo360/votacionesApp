import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    votaciones:[],
    newVotacion: null,
    misVotaciones:null
}

export const VoteSlice = createSlice({
  name: 'Votaciones',
  initialState,
  reducers: {
    addVotations:(state,{payload})=>{
        state.votaciones = payload
    },
    removeVotation:(state,{payload})=>{
        state.votaciones.map((index)=>{
            let anterior = index
            if (state.votaciones.id == payload.id) {
                state.votaciones.splice(anterior,index)
            }
        })
    },
    editVotacion:(state,{payload})=>{
      state.votaciones[payload.position] = payload.votacion
    },
    addNewVotation:(state,{payload})=>{
      state.newVotacion = payload
    }
  },
});

export const {addVotations,removeVotation,addNewVotation} = VoteSlice.actions;
