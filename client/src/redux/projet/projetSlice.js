import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProjet: null,
  ploaded: false,
  error: false,
}

const projetSlice = createSlice({
  name: 'projet',
  initialState,
  reducers: {
    getprojetInitial: (state) => {
      state.ploaded = false
      state.error = false
    },
    getprojetStart: (state) => {
      state.ploaded = false
    },
    getprojetSuccess: (state, action) => {
      state.currentProjet = action.payload
      state.ploaded = true
      state.error = false
    },
    getprojetFailure: (state) => {
      state.ploaded = false
      state.error = true
    },
  },
})

export const {
  getprojetInitial,
  getprojetStart,
  getprojetSuccess,
  getprojetFailure,
} = projetSlice.actions

export default projetSlice.reducer
