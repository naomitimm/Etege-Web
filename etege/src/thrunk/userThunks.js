import { createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../service/userService'


export const logIn = createAsyncThunk(
  'login',
  async (data) => {
    console.log(data)
    const response = await login(data)
    return response
  }
)

// export const fetchVoteCounts = createAsyncThunk(
//   'vote/fetchVoteCounts',
//   async () => {
//     const response = await getVoteCounts()
//     return response
//   }
// )
// export const fetchVoteCountByCategory = createAsyncThunk(
//   'vote/fetchVoteCounts',
//   async (id) => {
//     const response = await getVoteCountByCategory(id)
//     return response
//   }
// )