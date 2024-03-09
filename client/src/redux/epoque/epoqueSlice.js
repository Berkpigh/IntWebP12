import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentEpoque: null,
  loading: false,
  error: false,
}

const epoqueSlice = createSlice({
  name: 'epoque',
  initialState,
  reducers: {
    getepoqueInitial: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = false
    },
    getepoqueStart: (state) => {
      state.loading = true
    },
    getepoqueSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = false
    },
    getepoqueFailure: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  getepoqueInitial,
  getepoqueStart,
  getepoqueSuccess,
  getepoqueFailure,
} = epoqueSlice.actions

export default epoqueSlice.reducer
