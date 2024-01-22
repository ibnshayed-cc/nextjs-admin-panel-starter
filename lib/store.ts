import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './login/loginSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        loginData:loginReducer
    },
    // middleware:(getDefaultMiddleware) =>{
    //   getDefaultMiddleware().concat(baseApi.middleware)
    // }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']