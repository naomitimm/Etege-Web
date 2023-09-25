import { createSlice } from "@reduxjs/toolkit";


//
const initialState = {
  error: null,
  data: null,
  status:"loading"
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state,action) => {
console.log(action)

        state.status="done"
        state.data= action.payload
      },
    
    // [logIn.fulfilled](state, action) {
    //   state.data = action.payload;
    //   if (action.payload) {
    //    state.data= action.payload
       
    //   }
    // },
    
  },
});

// // Action creators are generated for each case reducer function
export const { logIn } =
authSlice.actions;

export default authSlice.reducer;
