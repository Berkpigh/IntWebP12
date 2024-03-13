import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentEpoque: null,
  loaded: false,
  error: false,
}

const epoqueSlice = createSlice({
  name: 'epoque',
  initialState,
  reducers: {
    getepoqueInitial: (state, action) => {
      state.currentEpoque = action.payload
      state.loaded = false
      state.error = false
    },
    getepoqueStart: (state) => {
      state.loaded = false
    },
    getepoqueSuccess: (state, action) => {
      state.currentEpoque = action.payload
      state.loaded = true
      state.error = false
    },
    getepoqueFailure: (state) => {
      state.loaded = false
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
