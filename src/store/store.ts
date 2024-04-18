import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  // product: productReducer
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
