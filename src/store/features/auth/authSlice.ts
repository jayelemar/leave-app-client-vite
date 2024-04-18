import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isLoggedIn: boolean
  user: null | string
  users: [] | string[]
  twoFactor: boolean
  message: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  users: [],
  twoFactor: false,
  message: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    RESET(state) {
      state.isLoggedIn = false
      state.user = null
      state.users = []
      state.twoFactor = false
      state.message = ''
    },
  },
})

export const { RESET } = authSlice.actions
export const selectIsloggedIn = (state: RootState) => state.auth.isLoggedIn
export default authSlice.reducer

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//   isLoggedIn: boolean,
//   user: string | null,
//   users: string[] | [],
//   twoFactor: boolean,
//   message: string
// }
// const initialState: AuthState = {
//   isLoggedIn: false,
//   user: null,
//   users: [],
//   twoFactor: false,
//   message: "",
//   // isError: false
//   // isSuccess: false
//   // isLoading: false
// }
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     RESET(state) {
//       state.twoFactor = false
//       state.message = ""
//     }
//   }
// });

// export const { RESET } = authSlice.actions
// export const selectIsloggedIn = (state) => state.authSlice.isLoggedIn
// export const { actions, reducer: authReducer } = authSlice;
// export type AuthStateType = ReturnType<typeof authReducer>;
