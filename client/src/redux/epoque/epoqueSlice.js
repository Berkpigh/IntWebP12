import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentEpoque: null,
  eloaded: false,
  error: false,
}

const epoqueSlice = createSlice({
  name: 'epoque',
  initialState,
  reducers: {
    getepoqueInitial: (state) => {
      state.eloaded = false
      state.error = false
    },
    getepoqueStart: (state) => {
      state.eloaded = false
    },
    getepoqueSuccess: (state, action) => {
      state.currentEpoque = action.payload
      state.eloaded = true
      state.error = false
    },
    getepoqueFailure: (state) => {
      state.eloaded = false
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
