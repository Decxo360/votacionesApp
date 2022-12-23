import { configureStore } from '@reduxjs/toolkit'
import {AuthSlice} from './auth/AuthSlice'
import {VoteSlice} from './vote/VoteSlice'

export const store = configureStore({
  reducer: {
    user: AuthSlice.reducer,
    votaciones:VoteSlice.reducer
  },
})