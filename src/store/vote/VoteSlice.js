import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    votaciones:[],
}

export const VoteSlice = createSlice({
  name: 'Votaciones',
  initialState,
  reducers: {
    addNewVotation:(state,{payload})=>{
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
    }
  },
});

export const {addNewVotation,removeVotation} = VoteSlice.actions;
