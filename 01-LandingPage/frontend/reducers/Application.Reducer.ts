import { ApplicationInitial } from '@/types/Application.Type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ApplicationInitial = {
  language: 'en',
}

const ApplicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload
    },
  },
})

export const { setLanguage } = ApplicationSlice.actions
export default ApplicationSlice.reducer
