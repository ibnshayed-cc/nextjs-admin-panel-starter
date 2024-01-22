import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginSlice {
  email: string
  password:string
}

const initialState: LoginSlice = {
  email: "",
  password:""
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {    
    login: (state, action: PayloadAction<LoginSlice>) => {
      state.email= action.payload.email
      state.password= action.payload.password
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer