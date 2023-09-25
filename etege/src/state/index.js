import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './userState'

const store = configureStore({
  reducer: {
   auth:authSlice.reducer
  }
})

export default store
