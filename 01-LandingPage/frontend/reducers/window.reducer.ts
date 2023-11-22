import { WindowInitial } from '@/types/window.type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: WindowInitial = {
  theme: 'dark',
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = windowSlice.actions
export default windowSlice.reducer
