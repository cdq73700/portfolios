import { WindowInitial } from '@/types/window.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: WindowInitial = {
  theme: 'dark',
  language: 'ja',
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload
    },
    setLanguage(state, action) {
      state.language = action.payload
    },
  },
})

export const { setTheme, setLanguage } = windowSlice.actions
export default windowSlice.reducer
